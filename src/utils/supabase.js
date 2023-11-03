import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tukwpgdbyjzczfidigwx.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1a3dwZ2RieWp6Y3pmaWRpZ3d4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODg3NjYxMSwiZXhwIjoyMDE0NDUyNjExfQ.cv1MN9jpDGyKefsfLfGQX38IWmWSMDmckK4sWSuP4BM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
