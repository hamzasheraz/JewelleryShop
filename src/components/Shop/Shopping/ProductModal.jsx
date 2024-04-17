// ProductModal.jsx
import React from "react";

const ProductModal = ({ id, product }) => {
  return (
    <div className="modal product-modal fade" id={id}>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <i className="tf-ion-close"></i>
      </button>
      <div className="modal-dialog " role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <div className="modal-image">
                  <img
                    className="img-responsive"
                    src={product.image}
                    alt="product-img"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="product-short-details">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-price">{product.price}</p>
                  <p className="product-short-description">
                    {product.description}
                  </p>
                  <a href="cart.html" className="btn btn-main">
                    Add To Cart
                  </a>
                  <a href="product-single.html" className="btn btn-transparent">
                    View Product Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
