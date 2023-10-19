import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function ProductCard3({ 
  id = 'id', 
  title = 'title', 
  price = 'price', 
  discount = 10, 
  imageUrl = '/image/cache/catalog/products/5-360x360.jpg', 
  hoverImageUrl = '/image/cache/catalog/products/4-360x360.jpg', 
  newPrice = 0, 
  oldPrice = 0, 
  rating = 0,
  description = 'description'
}) {
  const handleAddToCart = () => {
    // Implement your add to cart functionality here
    console.log('Add to cart', id);
  };

  const handleAddToWishlist = () => {
    // Implement your add to wishlist functionality here
    console.log('Add to wishlist', id);
  };

  return (
    <div className="product-layout product-list col-xs-12">
      <div className="product-thumb" >
        <Link href={`/product/${id}`}>
          <div className="image">
            <span>
              <img src={imageUrl} alt={title} title={title}
                className="img-responsive" />
              <img className="img-responsive hover-img" src={hoverImageUrl}
                title={title} alt={title} />
            </span>
            {discount && <div className="sale-text"><span className="section-sale">-{discount}%</span></div>}
          </div>
          <div className="thumb-description clearfix">
            <div className="caption">
              <h4 className="product-title">
                <span>
                  <p>{title}</p>
                </span>
              </h4>
              <p className="price">
                <span className="price-new">${newPrice}</span>
                {oldPrice && <span className="price-old">${oldPrice}</span>}
              </p>
              <div className="rating">
                {/* Assuming rating is a number between 1 and 5 */}
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="fa fa-stack">
                    <i className={`fa fa-star${i < rating ? '' : '-o'} fa-stack-2x`}></i>
                  </span>
                ))}
              </div>
              <p className="description">{description}</p>
              <div className="all-btn">
                <div className="button-group btn-list">
                  <button type="button" className="addcart" data-toggle="tooltip" title="Buy Now"
                  ><i className="icon-basket-3"></i></button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>

  );
}
export default ProductCard3;