import ProductCard2 from "../components/card2";

function BestSeller() {
  return (
    <div className="box all-products bestseller mt-100">
      <div className="container">
        <div className="box-heading">
          <div className="box-content">
            <div className="page-title toggled">
              <h3>Bestsellers</h3>
            </div>
            <div className="block_box row">
              <div id="bestseller-carousel" className="box-product  product-carousel  clearfix" data-items="4">
                <ProductCard2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSeller;