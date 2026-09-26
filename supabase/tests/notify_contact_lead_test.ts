import { assertEquals } from "jsr:@std/assert@1";
import {
  DEFAULT_FROM,
  handleNotifyContactLead,
  RECIPIENT,
  SECRET_HEADER,
} from "../functions/notify-contact-lead/email.ts";

const SECRET = "test-webhook-secret";
const API_KEY = "re_test_key";
const SAMPLE_URL = new URL("../functions/notify-contact-lead/sample-payload.json", import.meta.url);
const sample = JSON.parse(await Deno.readTextFile(SAMPLE_URL));
const ENV_KEYS = ["WEBHOOK_SECRET", "RESEND_API_KEY", "RESEND_FROM"] as const;

function snapshotEnv() {
  return new Map(ENV_KEYS.map((key) => [key, Deno.env.get(key)]));
}

function restoreEnv(prior: Map<(typeof ENV_KEYS)[number], string | undefined>) {
  for (const [key, value] of prior) {
    if (value === undefined) Deno.env.delete(key);
    else Deno.env.set(key, value);
  }
}

function configureEnv() {
  Deno.env.set("WEBHOOK_SECRET", SECRET);
  Deno.env.set("RESEND_API_KEY", API_KEY);
  Deno.env.delete("RESEND_FROM");
}

function post(body: unknown, secret?: string) {
  const headers = new Headers({ "content-type": "application/json" });
  if (secret !== undefined) headers.set(SECRET_HEADER, secret);
  return new Request("http://localhost/notify-contact-lead", {
    method: "POST",
    headers,
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

function recordFetch(status = 200, responseBody: unknown = { id: "email_123" }) {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  const fetchImpl: typeof fetch = (input, init) => {
    calls.push({ url: String(input), init: init ?? {} });
    return Promise.resolve(
      new Response(JSON.stringify(responseBody), {
        status,
        headers: { "content-type": "application/json" },
      }),
    );
  };
  return { calls, fetchImpl };
}

function sent(calls: Array<{ url: string; init: RequestInit }>) {
  const headers = calls[0].init.headers as Record<string, string>;
  return {
    url: calls[0].url,
    headers,
    body: JSON.parse(String(calls[0].init.body)) as Record<string, unknown>,
  };
}

async function captureLogs(run: () => Promise<void>) {
  const lines: string[] = [];
  const originalLog = console.log;
  const originalError = console.error;
  console.log = (...args: unknown[]) => {
    lines.push(args.map(String).join(" "));
  };
  console.error = (...args: unknown[]) => {
    lines.push(args.map(String).join(" "));
  };
  try {
    await run();
  } finally {
    console.log = originalLog;
    console.error = originalError;
  }
  return lines.join("\n");
}

function assertNoLeadPii(log: string) {
  for (const snippet of ["239-555-0100", "sam@example.com", "Sam Rivera", "More strikes", API_KEY, SECRET]) {
    if (log.includes(snippet)) {
      throw new Error(`log included private data: ${snippet}`);
    }
  }
}

Deno.test("rejects calls without the webhook secret", async () => {
  const prior = snapshotEnv();
  configureEnv();
  const { calls, fetchImpl } = recordFetch();
  try {
    const missing = await handleNotifyContactLead(post(sample), { fetchImpl });
    const wrong = await handleNotifyContactLead(post(sample, "nope"), { fetchImpl });
    assertEquals(missing.status, 401);
    assertEquals(wrong.status, 401);
    assertEquals(calls.length, 0);
    assertEquals(await wrong.json(), { error: "unauthorized" });
  } finally {
    restoreEnv(prior);
  }
});

Deno.test("rejects a request when the webhook secret is unset", async () => {
  const prior = snapshotEnv();
  Deno.env.delete("WEBHOOK_SECRET");
  const { calls, fetchImpl } = recordFetch();
  try {
    const response = await handleNotifyContactLead(post(sample, SECRET), { fetchImpl });
    assertEquals(response.status, 401);
    assertEquals(calls.length, 0);
  } finally {
    restoreEnv(prior);
  }
});

Deno.test("rejects the wrong method and a payload that is not a new lead", async () => {
  const prior = snapshotEnv();
  configureEnv();
  const { calls, fetchImpl } = recordFetch();
  try {
    const get = await handleNotifyContactLead(
      new Request("http://localhost/notify-contact-lead", { method: "GET" }),
      { fetchImpl },
    );
    const badJson = await handleNotifyContactLead(post("{", SECRET), { fetchImpl });
    const update = await handleNotifyContactLead(
      post({ ...sample, type: "UPDATE" }, SECRET),
      { fetchImpl },
    );
    assertEquals(get.status, 405);
    assertEquals(badJson.status, 400);
    assertEquals(update.status, 400);
    assertEquals(calls.length, 0);
  } finally {
    restoreEnv(prior);
  }
});

Deno.test("reports missing Resend configuration without logging the lead", async () => {
  const prior = snapshotEnv();
  configureEnv();
  Deno.env.set("RESEND_API_KEY", "  ");
  const { calls, fetchImpl } = recordFetch();
  try {
    const log = await captureLogs(async () => {
      const response = await handleNotifyContactLead(post(sample, SECRET), { fetchImpl });
      assertEquals(response.status, 500);
      assertEquals(await response.json(), { error: "email_not_configured" });
    });
    assertNoLeadPii(log);
    assertEquals(calls.length, 0);
  } finally {
    restoreEnv(prior);
  }
});

Deno.test("sends the lead email to Nick and keeps the lead out of the logs", async () => {
  const prior = snapshotEnv();
  configureEnv();
  const { calls, fetchImpl } = recordFetch();
  try {
    const log = await captureLogs(async () => {
      const response = await handleNotifyContactLead(post(sample, SECRET), { fetchImpl });
      assertEquals(response.status, 200);
      assertEquals(await response.json(), { ok: true });
    });
    assertEquals(calls.length, 1);
    const email = sent(calls);
    assertEquals(email.url, "https://api.resend.com/emails");
    assertEquals(email.headers.Authorization, `Bearer ${API_KEY}`);
    assertEquals(email.headers["Idempotency-Key"], `contact-lead/${sample.record.id}`);
    assertEquals(email.body.from, DEFAULT_FROM);
    assertEquals(email.body.to, [RECIPIENT]);
    assertEquals(email.body.subject, "New Pitching101 evaluation: Sam Rivera");
    assertEquals(email.body.reply_to, "sam@example.com");
    const text = String(email.body.text);
    for (const snippet of [
      "Name: Sam Rivera",
      "Phone: 239-555-0100",
      "Age: 11",
      "Goals: More strikes",
      "Schedule: Tuesdays after school",
      "How they heard: Instagram",
      "Role: Parent",
      "Player or team: Gulf Coast Travel",
      "Email: sam@example.com",
      "Note: Left-handed",
      "Source: start_form",
      "Created: 2026-09-26T19:00:00Z",
      `Lead id: ${sample.record.id}`,
    ]) {
      if (!text.includes(snippet)) throw new Error(`email missing ${snippet}`);
    }
    if (text.includes("Train:")) throw new Error("blank train was included");
    assertNoLeadPii(log);
    if (!log.includes(sample.record.id)) throw new Error("log missing lead id");
  } finally {
    restoreEnv(prior);
  }
});

Deno.test("omits reply-to for a blank or invalid email and keeps a custom from address on one line", async () => {
  const prior = snapshotEnv();
  configureEnv();
  Deno.env.set("RESEND_FROM", "Coach\nDeising <onboarding@resend.dev>");
  const { calls, fetchImpl } = recordFetch();
  try {
    const blank = structuredClone(sample);
    blank.record.email = null;
    blank.record.name = "Sam\nRivera";
    await handleNotifyContactLead(post(blank, SECRET), { fetchImpl });
    const invalid = structuredClone(sample);
    invalid.record.id = "22222222-2222-2222-2222-222222222222";
    invalid.record.email = "not-an-email";
    await handleNotifyContactLead(post(invalid, SECRET), { fetchImpl });

    const first = sent([calls[0]]);
    const second = sent([calls[1]]);
    assertEquals(first.body.reply_to, undefined);
    assertEquals(second.body.reply_to, undefined);
    assertEquals(first.body.subject, "New Pitching101 evaluation: Sam Rivera");
    assertEquals(first.body.from, "Coach Deising <onboarding@resend.dev>");
    assertEquals(first.body.to, [RECIPIENT]);
  } finally {
    restoreEnv(prior);
  }
});

Deno.test("returns email_failed when Resend rejects the send, without echoing Resend's body", async () => {
  const prior = snapshotEnv();
  configureEnv();
  const { calls, fetchImpl } = recordFetch(403, {
    message: "You can only send testing emails to your own email address (sam@example.com).",
  });
  try {
    const log = await captureLogs(async () => {
      const response = await handleNotifyContactLead(post(sample, SECRET), { fetchImpl });
      assertEquals(response.status, 502);
      assertEquals(await response.json(), { error: "email_failed" });
    });
    assertEquals(calls.length, 1);
    assertNoLeadPii(log);
    if (!log.includes('"status":403')) throw new Error("log missing resend status");
  } finally {
    restoreEnv(prior);
  }
});

Deno.test("accepts the sample payload over HTTP and posts it to Resend", async () => {
  const prior = snapshotEnv();
  configureEnv();
  const received: Array<{ authorization: string | null; body: Record<string, unknown> }> = [];
  const resend = Deno.serve({ port: 0, hostname: "127.0.0.1" }, async (request) => {
    received.push({
      authorization: request.headers.get("authorization"),
      body: await request.json(),
    });
    return Response.json({ id: "email_local" });
  });
  const port = (resend.addr as Deno.NetAddr).port;
  const webhook = Deno.serve({ port: 0, hostname: "127.0.0.1" }, (request) =>
    handleNotifyContactLead(request, { resendUrl: `http://127.0.0.1:${port}/emails` }),
  );
  const webhookPort = (webhook.addr as Deno.NetAddr).port;
  try {
    const denied = await fetch(`http://127.0.0.1:${webhookPort}/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(sample),
    });
    assertEquals(denied.status, 401);

    const accepted = await fetch(`http://127.0.0.1:${webhookPort}/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        [SECRET_HEADER]: SECRET,
      },
      body: await Deno.readTextFile(SAMPLE_URL),
    });
    assertEquals(accepted.status, 200);
    assertEquals(await accepted.json(), { ok: true });
    assertEquals(received.length, 1);
    assertEquals(received[0].authorization, `Bearer ${API_KEY}`);
    assertEquals(received[0].body.to, [RECIPIENT]);
    assertEquals(received[0].body.subject, "New Pitching101 evaluation: Sam Rivera");
  } finally {
    await webhook.shutdown();
    await resend.shutdown();
    restoreEnv(prior);
  }
});
