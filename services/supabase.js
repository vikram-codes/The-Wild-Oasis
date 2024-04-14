import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jnkzmylaeuiuwizlwxkp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impua3pteWxhZXVpdXdpemx3eGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NTg3OTYsImV4cCI6MjAyODIzNDc5Nn0.SYl2hACcIwxcYpt3b9X3S30qFCsxbDTVzpTWvU2daek";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
