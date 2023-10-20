"use client";
import { useEffect, useState } from 'react';
import ProductCard1 from './card1';

export default function ProductType({ featured, special, bestseller }) {
  const [activeTab, setActiveTab] = useState('featured');
  const products = {
    featured: featured,
    special: special,
    bestseller: bestseller
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
        <ProductCard1 
          key={product.id}  
          id={product.id}  
          title={product.title}
          price={product.price}
          imageUrl={JSON.parse(product.images)[0]}
          hoverImageUrl={JSON.parse(product.images)[1]}
        />
      ))}
    </div>
  );
}