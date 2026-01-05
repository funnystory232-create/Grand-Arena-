
// Supabase setup
const SUPABASE_URL = "https://hnpjwuhcekiecxpvsjyg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_uedrHkz8UEYeVk5JdSH8Cg_HTHuKjqx";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// JS logic goes here (auth, wallet, tournaments, admin)
console.log('Grand Arena App loaded');
