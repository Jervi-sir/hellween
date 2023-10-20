import { cookies } from "next/headers";
import supabase from "./supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const getData = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*');

    if (error) throw error;
    return products;
    //res.json(data);
  } catch (error) {
    //res.status(500).json({ error: error.message });
  }
};
