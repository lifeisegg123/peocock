import { createBrowserClient } from "@supabase/ssr";

declare const window: {
  ENV: Record<string, string>;
};

function createSupabaseClient() {
  const supabase = createBrowserClient(
    window.ENV.SUPABASE_URL!,
    window.ENV.SUPABASE_ANON_KEY!
  );
  return supabase;
}

export const supabaseClient = createSupabaseClient();
