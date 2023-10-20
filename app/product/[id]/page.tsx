import { getProduct } from "@/functions/get-product";
import ImagePreview from "./preview";
import type { Metadata } from 'next'
import { Qtn } from "./qtn";
import { Description } from "./description";
import { Suggestions } from "./suggestion";

export const metadata: Metadata = {
  title: 'Product with Hell Ween',
  description: 'Better shop for Halloween 2023, and now You are with Our best products',
}

async function Product({ params }) {
  const { id } = params;

  const productArray = await getProduct(id);
  const product = productArray[0];

  return (
    <>
      <div className="breadcrumb-back">
        <div className="breadcrumb-inner container clearfix">
          <div className="breadcrumb-row">
          </div>
        </div>
      </div>
      <div id="product-page" className="container">
        <div className="row">
          <div id="content" className="col-sm-12">
            <div className="pro-detail row">
              <div className="col-sm-6 product-img">
                <div className="thumbnails">
                  <div className="product-additional">
                    <ImagePreview images={product.images} />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 right_info">
                <h1 className="">{product.title}</h1>
                <div className="rating clearfix">
                  <div className="product-rating">
                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i
                      className="fa fa-star-o fa-stack-1x"></i></span>
                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i
                      className="fa fa-star-o fa-stack-1x"></i></span>
                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i
                      className="fa fa-star-o fa-stack-1x"></i></span>
                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i
                      className="fa fa-star-o fa-stack-1x"></i></span>
                    <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
                  </div>
                  <a href="#" className="reviews">1 reviews</a>
                </div>
                <hr />
                <ul className="list-unstyled">
                  <li><span className="disc">Brand:</span> { product.brand }</li>
                  <li><span className="disc">Availability:</span><span className="disc1"> { product.qtn > 0 ? 'In Stock' : 'Out of Stock' }</span></li>
                </ul>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <span className="pro_price">${parseFloat(product.price) - (parseFloat(product.price) * parseFloat(product.discount) / 100)}</span><span className="pro_oldprice" style={{
                      textDecoration: 'line-through'
                    }}>${product.price}</span>
                  </li>
                  <li className="tax">Delivery cost: $00.00 FREE</li>
                </ul>
                <hr />
                <Qtn leftInStock={product.qtn} pricePerItem={product.price} />
                <hr />
                <div className="addthis_toolbox addthis_default_style"
                  data-url="index0f47.html?route=product/product&amp;product_id=29">
                  <a className="addthis_button_facebook_like"></a>
                  <a className="addthis_button_tweet"></a>
                  <a className="addthis_button_pinterest_pinit"></a>
                  <a className="addthis_counter addthis_pill_style"></a>
                </div>
              </div>
            </div>
            <Description />
            <Suggestions />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

/*
async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/product?id=${id}`);

  const result = res.json()
  result.then((e) => {
    console.log(e)
  })
  return result
}
---
  const product = await getData(id)

*/