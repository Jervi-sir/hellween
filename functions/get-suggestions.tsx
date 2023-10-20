import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const getSuggestions = async () => {

  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  let response;
  try {
    const { data: products, error } = await supabase
      .rpc('get_random');
    
    if (error) throw error;
    return products;
    //res.json(data);
  } catch (error) {
    //res.status(500).json({ error: error.message });
  }
}