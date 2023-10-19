import SlideShow from './components/slideShow';
import BannerOuter2 from './components/bannerOuter2';
import ProductType from './components/productTab';
import Footer from './footer';


export default function Home() {
  return (
    <>
	    <div id="common-home">
        <SlideShow />
        <ProductType />
        <BannerOuter2 />
      </div>
    </>
  )
}
