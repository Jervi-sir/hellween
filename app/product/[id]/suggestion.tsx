import { getSuggestions } from "@/functions/get-suggestions"
import Link from "next/link";


export const Suggestions = async () => {
  const suggestions = await getSuggestions();
console.log(suggestions)
  return (
    <div className="related-products-block box">
      <div className="box-content">
        <div className="page-title">
          <h3>Related Products</h3>
        </div>
        <div className="block_box row category-row d-flex justify-center">
          <div className="box-product" style={{display: 'flex', justifyContent: 'center'}}>
            {
              suggestions.map(product => (
                <>
                  <div className="product-layout col-xs-3">
                    <div className="product-thumb">
                      <div className="image">
                        <Link href={`/product/${product.id}`}>
                          <img
                            src={JSON.parse(product.images)[0]}
                            alt={product.title} title={product.title} className="img-responsive" />
                          <img className="img-responsive hover-img"
                            src={JSON.parse(product.images)[1]}
                            title={product.title} alt={product.title} />
                        </Link>
                        {
                          product.discount > 0 &&
                            <div className="sale-text"><span className="section-sale">-{product.discount}%</span></div>
                        }
                      </div>
                      <div className="thumb-description clearfix">
                        <div className="caption">
                          <h4 className="product-title"><a
                            href="index6320.html?route=product/product&amp;product_id=28">Zombie</a></h4>
                          <p className="price" style={{display: 'flex', justifyContent: 'center'}}>
                            <span className="price-new">${ parseFloat(product.price) }</span>
                            {
                              product.discount > 0 &&  
                                <span className="price-old">${parseFloat(product.price) - (parseFloat(product.price) * parseFloat(product.discount) / 100)}</span>
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}