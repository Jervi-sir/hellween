import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  let response;
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id);

    if (error) throw error;
    response = products;
    //res.json(data);
  } catch (error) {
    //res.status(500).json({ error: error.message });
  }

  return Response.json(response)
}