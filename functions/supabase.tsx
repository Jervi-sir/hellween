import { createClient } from '@supabase/supabase-js'

export default createClient(
  'https://q9q9q9q9q9.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJydWpqcWp3aXJlbWVxcHpoaHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3NTUxMjEsImV4cCI6MjAxMzMzMTEyMX0.Xesa8ZPvzmiquEKPD3VJjIbn-SUDB535BonkyonRJSo'
)

//process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!