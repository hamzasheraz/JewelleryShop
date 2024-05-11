import React from "react";

const ProductSummary = ({ product }) => {
  return (
    <div className="media product-card">
      <a className="pull-left" href={product.link}>
        <img className="media-object" src={product.image} alt={product.name} />
      </a>
      <div className="media-body">
        <h4 className="media-heading">
          <a href={product.link}>{product.name}</a>
        </h4>
        <p className="price">
          {product.quantity} x {product.price}
        </p>
        <span className="remove">Remove</span>
      </div>
    </div>
  );
};

export default ProductSummary;
