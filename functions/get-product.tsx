import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const getProduct = async (id) => {

  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  let response;
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id);

    if (error) throw error;
    return products;
    //res.json(data);
  } catch (error) {
    //res.status(500).json({ error: error.message });
  }
}