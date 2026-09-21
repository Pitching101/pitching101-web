"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const LESSON_VIDEO_BUCKET = "lesson-videos";

let client: SupabaseClient | null = null;

export function isPortalConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

/** Browser client for the dugout. Session stays in local storage. */
export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (!client) {
    client = createClient(url, key, {
      auth: {
        persistSession: true,
        detectSessionInUrl: true,
        autoRefreshToken: true,
      },
    });
  }
  return client;
}
