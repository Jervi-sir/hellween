"use client";
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard1 from './card1';

export default function ProductType() {
  const [activeTab, setActiveTab] = useState('featured');

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="product-tab-block box mt-100">
      <div className="container">
        <div className="main-tab">
          <div className="product-tabs box-content clearfix">
            <div id="tabs" className="mahardhi-tabs section">
              <ul className="nav nav-tabs">
                <li>
                  <button onClick={() => setActiveTab('featured')} className={activeTab === 'featured' ? 'selected' : ''}>Featured</button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('special')} className={activeTab === 'special' ? 'selected' : ''}>Special</button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('bestseller')} className={activeTab === 'bestseller' ? 'selected' : ''}>Bestseller</button>
                </li>
              </ul>
            </div>
            <div className="all-content">
              <div className="row">
                <div className="tab-content block_box">
                  {activeTab === 'featured' && (
                    <div id="tab-featured" className="tab-pane">
                      <Slider {...settings}>
                        {/* Your featured products here */}
                       <ProductCard1 />
                      </Slider>
                    </div>
                  )}
                  {activeTab === 'bestseller' && (
                    <div id="tab-bestseller" className="tab-pane">
                      <Slider {...settings}>
                        {/* Your bestseller products here */}
                       <ProductCard1 />
                      </Slider>
                    </div>
                  )}
                  {activeTab === 'special' && (
                    <div id="tab-special" className="tab-pane">
                      <Slider {...settings}>
                        {/* Your special products here */}
                       <ProductCard1 />
                      </Slider>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
