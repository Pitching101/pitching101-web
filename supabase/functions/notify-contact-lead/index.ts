import { handleNotifyContactLead } from "./email.ts";

Deno.serve((request) => handleNotifyContactLead(request));
