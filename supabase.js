
const SUPABASE_URL = "https://jsdnmyzgsuydssloczpc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_4Dq3OPhSFEgesT5quwWBTg_QAh6aYWA";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    global: {
      headers: {}
    }
  }
);

console.log("Skinora Supabase initialized!");