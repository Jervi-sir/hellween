import Link from "next/link";
import Categories from './categories';
import BestSeller from "./bestSeller";
import SideAds from "./sideAds";
import ProductCard3 from "../components/card3";

function List() {
  return (
    <>
      <div className="breadcrumb-back">
        <div className="breadcrumb-inner container clearfix">
          <div className="breadcrumb-row">
          </div>
        </div>
      </div>
    
    <div id="product-category" className="container">
      <div className="row">
        <aside id="column-left" className="col-sm-3 hidden-xs">
          <Categories />
          <BestSeller />
          <SideAds />
        </aside>
        <div id="content" className="col-sm-9">
          <div className="row category-row">
            <ProductCard3 />

          </div>
          <div className="pro_pagination">
            <div className="row">
              <div className="col-sm-12 text-right">
                <ul className="pagination">
                  <li className="active"><span>1</span></li>
                  {/* <li><a href="indexe1b1.html?route=product/category&amp;path=18&amp;page=2">2</a></li> */}
                  <li><a href="indexe1b1.html?route=product/category&amp;path=18&amp;page=2">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="category-block">
            <div className="row">
              <div className="col-sm-12"><img src="https://res.cloudinary.com/dbnslnawc/image/upload/v1697722782/hellweenshop/kqml0incihczyahoq4pj.jpg" alt="Shop"
                title="Shop" className="img-thumbnail cat-banner" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default List;