import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://khxmjwkjxklzwtfwzzkh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoeG1qd2tqeGtsend0Znd6emtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjkxMDksImV4cCI6MjA1MjEwNTEwOX0._7g99YsmwG_qhBu0i_fzOrEjwAMhHzbngPFGHQfSOy8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
