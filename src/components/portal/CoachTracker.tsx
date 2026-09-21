"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  formatLessonDay,
  formatMoney,
  todayInNaples,
  type Profile,
  type TrackerAccount,
  type TrackerPayment,
} from "@/lib/portal";

const TRACKER_YEAR = 2026;

export default function CoachTracker({
  supabase,
  profile,
}: {
  supabase: SupabaseClient;
  profile: Profile;
}) {
  const [accounts, setAccounts] = useState<TrackerAccount[]>([]);
  const [payments, setPayments] = useState<TrackerPayment[]>([]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [openId, setOpenId] = useState<string | null | "">(null);

  const yearPayments = useMemo(
    () => payments.filter((payment) => payment.paid_on.startsWith(String(TRACKER_YEAR))),
    [payments],
  );

  const rows = useMemo(() => {
    return accounts.map((account) => {
      const lines = yearPayments
        .filter((payment) => payment.account_id === account.id)
        .slice()
        .sort((a, b) => a.paid_on.localeCompare(b.paid_on));
      const total = lines.reduce((sum, payment) => sum + Number(payment.amount), 0);
      return { account, lines, total };
    });
  }, [accounts, yearPayments]);

  const grandTotal = useMemo(
    () => rows.reduce((sum, row) => sum + row.total, 0),
    [rows],
  );

  const reload = useCallback(async () => {
    const [{ data: accountRows }, { data: paymentRows }] = await Promise.all([
      supabase.from("tracker_accounts").select("id, name, sort_order").order("sort_order").order("name"),
      supabase.from("tracker_payments").select("id, account_id, paid_on, amount").order("paid_on"),
    ]);
    setAccounts((accountRows || []) as TrackerAccount[]);
    setPayments(
      ((paymentRows || []) as TrackerPayment[]).map((payment) => ({
        ...payment,
        amount: Number(payment.amount),
      })),
    );
  }, [supabase]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load tracker from supabase
    void reload();
  }, [reload]);

  async function addAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = String(new FormData(form).get("name") || "").trim();
    if (!name) return;
    setBusy(true);
    setStatus("");
    const nextOrder = (accounts.at(-1)?.sort_order ?? 0) + 1;
    const { error } = await supabase.from("tracker_accounts").insert({
      name,
      sort_order: nextOrder,
      created_by: profile.id,
    });
    setBusy(false);
    if (error) {
      setStatus(error.message);
      return;
    }
    form.reset();
    await reload();
  }

  async function addPayment(event: FormEvent<HTMLFormElement>, accountId: string) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const paidOn = String(data.get("paid_on") || todayInNaples());
    const amount = Number(data.get("amount"));
    if (!amount || amount <= 0) {
      setStatus("Put a dollar amount in.");
      return;
    }
    setBusy(true);
    setStatus("");
    const { error } = await supabase.from("tracker_payments").insert({
      account_id: accountId,
      paid_on: paidOn,
      amount,
      created_by: profile.id,
    });
    setBusy(false);
    if (error) {
      setStatus(error.message);
      return;
    }
    form.reset();
    await reload();
  }

  async function removePayment(id: string) {
    if (!window.confirm("Take this payment off the tracker?")) return;
    setBusy(true);
    await supabase.from("tracker_payments").delete().eq("id", id);
    setBusy(false);
    await reload();
  }

  return (
    <div
      className="portal-tracker"
      id="portal-panel-tracker"
      role="tabpanel"
      aria-labelledby="portal-tab-tracker"
    >
      <section className="portal-card">
        <p className="portal-kicker">Your notebook</p>
        <h2 className="ui-title ui-title-sm">Lesson Tracker {TRACKER_YEAR}</h2>
        <p className="portal-stat">{formatMoney(grandTotal)}</p>
        <p className="portal-lead">
          Same book as your notes. Add a name, drop in what came in. Families
          don&apos;t see this.
        </p>
      </section>

      {rows.map(({ account, lines, total }) => {
        const activeId = openId === "" ? null : (openId ?? rows[0]?.account.id ?? null);
        const open = activeId === account.id;
        return (
          <section key={account.id} className="portal-card">
            <button
              type="button"
              className="portal-tracker-head"
              aria-expanded={open}
              onClick={() => setOpenId(open ? "" : account.id)}
            >
              <h3 className="ui-title ui-title-sm">{account.name}</h3>
              <strong>{formatMoney(total)}</strong>
            </button>
            {open ? (
              <>
                <ol className="portal-lessons">
                  {lines.map((payment) => (
                    <li key={payment.id} className="portal-lesson portal-tracker-line">
                      <div className="portal-lesson-top">
                        <strong>{formatLessonDay(payment.paid_on)}</strong>
                        <span>{formatMoney(payment.amount)}</span>
                        <button
                          type="button"
                          className="footer-link"
                          onClick={() => void removePayment(payment.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ol>
                {!lines.length ? (
                  <p className="portal-lead">No payments yet this year.</p>
                ) : null}
                <form
                  className="start-form portal-mini-form portal-tracker-add"
                  onSubmit={(event) => void addPayment(event, account.id)}
                >
                  <div className="start-field-row portal-tracker-row">
                    <label className="start-field">
                      <span>Date</span>
                      <input name="paid_on" type="date" defaultValue={todayInNaples()} required />
                    </label>
                    <label className="start-field">
                      <span>Amount</span>
                      <input name="amount" type="number" min="0.01" step="0.01" required />
                    </label>
                  </div>
                  <button className="btn" type="submit" disabled={busy}>
                    Add payment
                  </button>
                </form>
              </>
            ) : null}
          </section>
        );
      })}

      <section className="portal-card">
        <h3 className="ui-title ui-title-sm">Add a name</h3>
        <form className="start-form portal-mini-form" onSubmit={(event) => void addAccount(event)}>
          <label className="start-field">
            <span>Player or team</span>
            <input name="name" required autoCapitalize="words" />
          </label>
          <button className="btn" type="submit" disabled={busy}>
            Add to tracker
          </button>
        </form>
      </section>

      {status ? (
        <p className="portal-note" aria-live="polite">
          {status}
        </p>
      ) : null}
    </div>
  );
}
