"use client"
import { useState } from "react"

export const Qtn = ({ leftInStock, pricePerItem }) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = pricePerItem * quantity;

  const handleIncrement = () => {
    if (quantity < leftInStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && value <= leftInStock) {
      setQuantity(value);
    }
  };

  return (
    <>
      <div id="product" className="product-options">
        <div className="form-group">
          <label className="control-label qty">Qty</label>
          <div className="product-btn-quantity">
            <div className="minus-plus">
              <button 
               disabled={quantity <= 1 ? true : false}
               className="minus" onClick={handleDecrement}><i className="fa fa-minus"></i></button>
              <input 
                type="number" 
                name="quantity" 
                id="input-quantity" 
                className="number-input" 
                value={quantity} 
                onChange={handleInputChange} 
              />
              <button 
               disabled={quantity >= leftInStock ? true : false}
               className="plus" onClick={handleIncrement}><i className="fa fa-plus"></i></button>
            </div>
          </div>
          <input type="hidden" name="product_id" />
        </div>
        <div className="form-group">
          <button 
            type="button" 
            id="button-cart" 
            data-loading-text="Loading..."
            className="btn btn-primary btn-lg btn-block"
          >
            Own it Now for
          </button>
          <div className="btn-group" style={{ marginLeft: '10px' }}>
            <span>{totalPrice}$ only</span>
          </div>
        </div>
      </div>
    </>
  );
};