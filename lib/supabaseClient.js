import { createClient } from '@supabase/supabase-js';

// ✅ Replace these two lines with your actual Supabase credentials
const supabaseUrl = "https://jzokslrpuoqnmoffhggo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6b2tzbHJwdW9xbm1vZmZoZ2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMDcwOTYsImV4cCI6MjA3NTU4MzA5Nn0.zGvsu20A5i0g1d13bH8H6SBrwOxphECR6LiHU1aGpuk";

// Create a single Supabase client for the whole app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
