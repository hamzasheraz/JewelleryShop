// ProductItem.jsx
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="product-item">
        <div className="product-thumb">
          {product.sale && <span className="bage">Sale</span>}
          <img
            className="img-responsive"
            src={product.image}
            alt={product.name}
          />
          <div className="preview-meta">
            <ul>
              <li>
                <span data-toggle="modal" data-target="#product-modal">
                  <i className="tf-ion-ios-search-strong"></i>
                </span>
              </li>
              <li>
                <a href="#!">
                  <i className="tf-ion-ios-heart"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="tf-ion-android-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-content">
          <h4>
            <a href="product-single.html">{product.title}</a>
          </h4>
          <p className="price">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
