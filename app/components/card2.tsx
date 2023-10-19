import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function ProductCard2({ id = 'id', title = 'title', price = 'price', discount = true, imageUrl = '/image/cache/catalog/products/5-360x360.jpg', hoverImageUrl = '/image/cache/catalog/products/4-360x360.jpg', newPrice = 0, oldPrice = 0 }) {
  const handleAddToCart = () => {
    // Implement your add to cart functionality here
    console.log('Add to cart', id);
  };

  const handleAddToWishlist = () => {
    // Implement your add to wishlist functionality here
    console.log('Add to wishlist', id);
  };

  return (
    <div className="product-layout col-xs-12">
      <div className="product-thumb transition clearfix">
        <div className="image">
          <Link href={`/product/${id}`}>
            <p>
              <img src={imageUrl} alt={title} title={title}
                className="img-responsive" />
              <img className="img-responsive hover-img" src={hoverImageUrl}
                title={title} alt={title} />
            </p>
          </Link>
          {discount && <div className="sale-text"><span className="section-sale">-10%</span></div>}
          <div className="button-group">
            <button type="button" className="addcart" data-toggle="tooltip" title="Buy now"
            ><i className="icon-basket-3"></i></button>
          </div>
        </div>
        <div className="thumb-description clearfix">
          <div className="caption">
            <h4 className="product-title">
              <Link href={`/product/${id}`}>
                <p>{title}</p>
              </Link>
            </h4>
            <p className="price">
              <span className="price-new">${newPrice}</span>
              {oldPrice && <span className="price-old">${oldPrice}</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard2;