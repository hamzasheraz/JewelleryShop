// ProductItem.jsx
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, fetchCartItems, fetchCartNoItems } from "../../../redux/slices/CartSlice/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [numberofitems, setnumberofitems] = useState(1);
  const increaseItems = () => {
    setnumberofitems(numberofitems + 1);
  };

  const decreaseItems = () => {
    if (numberofitems > 1) {
      setnumberofitems(numberofitems - 1);
    }
  };

  return (
    <div className="col-md-4">
      <div className="product-item">
        <div className="product-thumb">
          {product.sale && <span className="bage">Sale</span>}
          <img
            className="img-responsive"
            src={"http://127.0.0.1:8000/" + product.image}
            alt={product.Product_name}
          />
          <div className="preview-meta">
            {numberofitems}
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increaseItems();
                  }}
                >
                  <i className="tf-ion-ios-baseline-add"></i>
                  Add
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decreaseItems();
                  }}
                >
                  <i className="tf-ion-ios-baseline-add"></i>
                  Sub
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addToCart({ product, numberofitems }))
                    dispatch(fetchCartItems());
                    dispatch(fetchCartNoItems());
                  }}
                >
                  <i className="tf-ion-android-cart"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-content">
          <h4>
            <a href="product-single.html">{product.Product_name}</a>
          </h4>
          <p className="price">{"Price :" + product.price}</p>
          <p className="price">{"TotalItems : " + numberofitems}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
