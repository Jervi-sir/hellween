"use client";
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard1 from './card1';

export default function ProductType() {
  const [activeTab, setActiveTab] = useState('featured');
  const products = {
    featured: [0,1 ,1],
    special: [0,1 ,1],
    bestseller: [0,1 ,1]
  };

  const handleTabClick = (event, tab) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="mahardhi-tabs section">
        <ul className="nav nav-tabs" style={{marginTop: 10, marginBottom: 3}}>
          <li>
            <a
              href="#tab-featured"
              className={activeTab === 'featured' ? 'active' : ''} 
              onClick={(event) => handleTabClick(event, 'featured')}
            >
              <span>Featured</span>
            </a>
          </li>
          <li>
            <a
              href="#tab-special"
              className={activeTab === 'special' ? 'active' : ''} 
              onClick={(event) => handleTabClick(event, 'special')}
            >
              <span>Special</span>
              </a>
          </li>
          <li>
            <a href="#tab-bestseller" 
              className={activeTab === 'bestseller' ? 'active' : ''}
              onClick={(event) => handleTabClick(event, 'bestseller')} 
            >
              <span>Bestseller</span>
              </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <ProductRow products={products[activeTab]} />
      </div>
    </div>
  );

}

function ProductRow({ products }) {

  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '30px', flexWrap: 'wrap', margin: 'auto', maxWidth: '90%', justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard1 key={product.id} />
      ))}
    </div>
  );
}


function ProductCarousel({ products }) {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,

  };

  return (
    <Slider {...settings}>
      {products.map(product => (
        <ProductCard1 key={product.id} />
      ))}
    </Slider>
  );
}
