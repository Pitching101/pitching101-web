/**
 * Emails nickdeisng@gmail.com when the contact_leads insert trigger calls in.
 * The trigger authenticates with the WEBHOOK_SECRET header. Logs include the
 * lead id and delivery status only.
 */

export const RECIPIENT = "nickdeisng@gmail.com";
export const DEFAULT_FROM = "Pitching101 <onboarding@resend.dev>";
export const SECRET_HEADER = "x-webhook-secret";
const RESEND_URL = "https://api.resend.com/emails";
const FIELD_MAX = 5000;
const SUBJECT_MAX = 120;

type Deps = {
  fetchImpl?: typeof fetch;
  resendUrl?: string;
};

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function secretsMatch(provided: string, expected: string) {
  if (!expected || !provided || provided.length > 512 || expected.length > 512) {
    return false;
  }
  const encoder = new TextEncoder();
  const [left, right] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(provided)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  const a = new Uint8Array(left);
  const b = new Uint8Array(right);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
  return diff === 0;
}

function field(value: unknown) {
  if (typeof value !== "string") return "";
  const cleaned = value.replace(/\u0000/g, "").trim();
  if (cleaned.length <= FIELD_MAX) return cleaned;
  return `${cleaned.slice(0, FIELD_MAX)}…`;
}

function oneLine(value: string) {
  return value.replace(/[\r\n\t]+/g, " ").replace(/ +/g, " ").trim();
}

function line(label: string, value: unknown) {
  const text = field(value);
  return text ? `${label}: ${text}` : "";
}

function emailText(lead: Record<string, unknown>) {
  const primary = [
    line("Name", lead.name),
    line("Phone", lead.phone),
    line("Age", lead.age),
    line("Goals", lead.goals),
    line("Schedule", lead.schedule),
    line("How they heard", lead.heard),
  ].filter((row) => row !== "");
  const extra = [
    line("Role", lead.role),
    line("Player or team", lead.player),
    line("Email", lead.email),
    line("Train", lead.train),
    line("Note", lead.note),
    line("Source", lead.source),
    line("Created", lead.created_at),
    line("Lead id", lead.id),
  ].filter((row) => row !== "");

  return ["New evaluation from the Get started form.", "", ...primary, "", ...extra].join("\n");
}

function replyTo(value: unknown) {
  const email = oneLine(field(value));
  if (email.length > 320) return undefined;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return undefined;
  return email;
}

function resolveDeps(deps?: Deps) {
  return {
    fetchImpl: typeof deps?.fetchImpl === "function" ? deps.fetchImpl : fetch,
    resendUrl: typeof deps?.resendUrl === "string" ? deps.resendUrl : RESEND_URL,
  };
}

function logDelivery(leadId: string, status: number | null, error?: string) {
  const line = JSON.stringify({
    event: "contact_lead_email",
    lead_id: leadId || null,
    status,
    ...(error ? { error } : {}),
  });
  if (error) console.error(line);
  else console.log(line);
}

export async function handleNotifyContactLead(request: Request, deps?: Deps) {
  if (request.method !== "POST") {
    return json(405, { error: "method_not_allowed" });
  }

  const expected = Deno.env.get("WEBHOOK_SECRET") ?? "";
  const provided = request.headers.get(SECRET_HEADER) ?? "";
  if (!(await secretsMatch(provided, expected))) {
    return json(401, { error: "unauthorized" });
  }

  const apiKey = (Deno.env.get("RESEND_API_KEY") ?? "").trim();
  if (!apiKey) {
    logDelivery("", null, "missing_resend_key");
    return json(500, { error: "email_not_configured" });
  }

  let payload: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 256_000) return json(413, { error: "payload_too_large" });
    payload = JSON.parse(raw);
  } catch {
    return json(400, { error: "invalid_json" });
  }

  if (!isRecord(payload) || payload.type !== "INSERT" || payload.table !== "contact_leads") {
    return json(400, { error: "unexpected_payload" });
  }
  if (payload.schema !== undefined && payload.schema !== "public") {
    return json(400, { error: "unexpected_payload" });
  }
  if (!isRecord(payload.record)) return json(400, { error: "unexpected_payload" });

  const lead = payload.record;
  const leadId = field(lead.id);
  const from = oneLine(Deno.env.get("RESEND_FROM") ?? "") || DEFAULT_FROM;
  const subjectName = oneLine(field(lead.name)).slice(0, SUBJECT_MAX) || "New lead";
  const resendBody: Record<string, unknown> = {
    from,
    to: [RECIPIENT],
    subject: `New Pitching101 evaluation: ${subjectName}`,
    text: emailText(lead),
  };
  const reply = replyTo(lead.email);
  if (reply) resendBody.reply_to = reply;

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  if (leadId) headers["Idempotency-Key"] = `contact-lead/${leadId}`;

  const { fetchImpl, resendUrl } = resolveDeps(deps);
  let resendResponse: Response;
  try {
    resendResponse = await fetchImpl(resendUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(resendBody),
    });
  } catch {
    logDelivery(leadId, null, "resend_unreachable");
    return json(502, { error: "email_failed" });
  }

  await resendResponse.arrayBuffer().catch(() => undefined);

  if (!resendResponse.ok) {
    logDelivery(leadId, resendResponse.status, "resend_rejected");
    return json(502, { error: "email_failed" });
  }

  logDelivery(leadId, resendResponse.status);
  return json(200, { ok: true });
}
