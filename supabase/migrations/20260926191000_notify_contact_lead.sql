-- Queue an email to Nick after a Get started lead is saved.
--
-- pg_net sends the request after the insert commits, so the form does not wait
-- on the email. The shared secret is read from Vault at fire time
-- (vault.secrets name: contact_lead_webhook_secret) and sent as
-- x-webhook-secret. It is not stored in this file.
--
-- supabase_functions.http_request is not installed here. Its header argument
-- is a fixed string on the trigger, which would commit the secret.

create schema if not exists extensions;

create extension if not exists pg_net with schema extensions;

create schema if not exists private;

revoke all on schema private from public;
revoke all on schema private from anon, authenticated;

create or replace function private.notify_contact_lead()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  webhook_secret text;
begin
  if tg_table_schema <> 'public'
     or tg_table_name <> 'contact_leads'
     or tg_op <> 'INSERT' then
    return new;
  end if;

  select decrypted_secret
    into webhook_secret
  from vault.decrypted_secrets
  where name = 'contact_lead_webhook_secret'
  order by created_at desc
  limit 1;

  if webhook_secret is null or btrim(webhook_secret) = '' then
    raise warning 'contact_lead webhook secret is missing; lead % was saved and no email was queued', new.id;
    return new;
  end if;

  perform net.http_post(
    url := 'https://edrawrsrncvawiuxvrxi.supabase.co/functions/v1/notify-contact-lead',
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', tg_table_name,
      'schema', tg_table_schema,
      'record', to_jsonb(new),
      'old_record', null
    ),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', webhook_secret
    ),
    timeout_milliseconds := 15000
  );

  return new;
exception
  when others then
    raise warning 'contact_lead webhook was not queued for lead %', new.id;
    return new;
end;
$$;

comment on function private.notify_contact_lead() is
  'Queues notify-contact-lead after a contact_leads insert. Reads Vault secret contact_lead_webhook_secret.';

revoke all on function private.notify_contact_lead() from public;
revoke all on function private.notify_contact_lead() from anon, authenticated;

drop trigger if exists contact_leads_notify_email on public.contact_leads;

create trigger contact_leads_notify_email
  after insert on public.contact_leads
  for each row
  execute function private.notify_contact_lead();

comment on trigger contact_leads_notify_email on public.contact_leads is
  'After insert, queue an email to Nick. A webhook failure does not roll back the lead.';
