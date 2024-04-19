import React from "react";
import { Link } from "react-router-dom";

const CartNav = () => {
  return (
    <li className="dropdown cart-nav dropdown-slide">
      <a
        href="#!"
        className="dropdown-toggle"
        data-toggle="dropdown"
        data-hover="dropdown"
      >
        <i className="tf-ion-android-cart"></i>Cart
      </a>
      <div className="dropdown-menu cart-dropdown">
        <div className="media">
          <a className="pull-left" href="#!">
            <img
              className="media-object"
              src="/src/images/shop/cart/cart-1.jpg"
              alt="image"
            />
          </a>
          <div className="media-body">
            <h4 className="media-heading">
              <a href="#!">Ladies Bag</a>
            </h4>
            <div className="cart-price">
              <span>1 x</span>
              <span>1250.00</span>
            </div>
            <h5>
              <strong>$1200</strong>
            </h5>
          </div>
          <a href="#!" className="remove">
            <i className="tf-ion-close"></i>
          </a>
        </div>
        <div className="media">
          <a className="pull-left" href="#!">
            <img
              className="media-object"
              src="/src/images/shop/cart/cart-2.jpg"
              alt="image"
            />
          </a>
          <div className="media-body">
            <h4 className="media-heading">
              <a href="#!">Ladies Bag</a>
            </h4>
            <div className="cart-price">
              <span>1 x</span>
              <span>1250.00</span>
            </div>
            <h5>
              <strong>$1200</strong>
            </h5>
          </div>
          <a href="#!" className="remove">
            <i className="tf-ion-close"></i>
          </a>
        </div>
        <div className="cart-summary">
          <span>Total</span>
          <span className="total-price">$1799.00</span>
        </div>
        <ul className="text-center cart-buttons">
          <li>
            <Link to="/cart" className="btn btn-small">
              View Cart
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="btn btn-small btn-solid-border">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CartNav;
