
import SlideShow from './components/slideShow';
import BannerOuter2 from './components/bannerOuter2';
import ProductType from './components/productTab';
import Footer from './footer';
import supabase from '@/functions/supabase';
import Link from 'next/link';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getData } from '@/functions/get-data';

export const revalidate = 60

export default async function Home({ data }) {
  const productArray = await getData();

  return (
    <>
	    <div id="common-home">
        <SlideShow />
        <ProductType special={productArray} featured={productArray} bestseller={productArray} />
        <BannerOuter2 />
      </div>
    </>
  )
}

