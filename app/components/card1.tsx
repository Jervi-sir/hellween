import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function ProductCard1({ id = 'id', title = 'title', price = 'price', imageUrl = '/image/cache/catalog/products/5-360x360.jpg', hoverImageUrl = '/image/cache/catalog/products/4-360x360.jpg' }) {
  const handleAddToCart = () => {
    // Implement your add to cart functionality here
    console.log('Add to cart', id);
  };

  const handleAddToWishlist = () => {
    // Implement your add to wishlist functionality here
    console.log('Add to wishlist', id);
  };

  return (
    <div className="product-layout ">
      <div className="product-thumb transition">
        <div className="image">
          <Link href={`/product/${id}`}>
            <p>
              <Image src={imageUrl} alt={title} title={title} className="img-responsive" width={360} height={360} />
              <Image src={hoverImageUrl} alt={title} title={title} className="img-responsive hover-img" width={360} height={360} />
            </p>
          </Link>
        
        </div>
        <div className="thumb-description clearfix">
          <div className="caption">
            <h4 className="product-title">
              <Link href={`/product/${id}`}>
                <p>{title}</p>
              </Link>
            </h4>
            <p className="price">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard1;