// OrderSummary.jsx
import React from 'react';
import ProductSummary from './ProductSummary';

const OrderSummary = ({ products, subtotal, shipping, total }) => {
  return (
    <div className="product-checkout-details">
      <div className="block">
        <h4 className="widget-title">Order Summary</h4>
        {products.map((product, index) => (
          <ProductSummary key={index} product={product} />
        ))}
        <div className="discount-code">
          <p>Have a discount ? <a data-toggle="modal" data-target="#coupon-modal" href="#!">enter it here</a></p>
        </div>
        <ul className="summary-prices">
          <li>
            <span>Subtotal:</span>
            <span className="price">{subtotal}</span>
          </li>
          <li>
            <span>Shipping:</span>
            <span>{shipping}</span>
          </li>
        </ul>
        <div className="summary-total">
          <span>Total</span>
          <span>{total}</span>
        </div>
        <div className="verified-icon">
          <img src="src/images/shop/verified.png" alt="Verified" />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
