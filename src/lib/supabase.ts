import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "[Supabase] Advertencia: Faltan variables de entorno en .env.local. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

// Se inicializa con fallback seguro para no romper la compilación del frontend
export const supabase = createClient(
  supabaseUrl || "https://jlcjyxkgnxyodaiubvub.supabase.co",
  supabaseAnonKey || "dummy-key"
);