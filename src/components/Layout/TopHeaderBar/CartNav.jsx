import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartNav = () => {
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const authToken = JSON.parse(localStorage.getItem("authtokens"));

  useEffect(() => {
    let p = 0;
    if (cart.items2 && cart.items) {
      cart.items.forEach((item, index) => {
        p += item.price * (cart.items2[index]?.number_of_items || 0);
      });
    }
    setTotalPrice(p);
  }, [cart.items2, cart.items]); // Dependencies array

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
        {cart.items2 &&
          cart.items &&
          cart.items.map((item, index) => (
            <div key={index} className="media">
              <a className="pull-left" href="#!">
                <img
                  className="media-object"
                  src={"http://127.0.0.1:8000/" + item.image}
                  alt={item.name}
                />
              </a>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="#!">{item.Product_name}</a>
                </h4>
                <div className="cart-price">
                  <span>1 x</span>
                  <span>{cart.items2[index]?.number_of_items}</span>
                </div>
                <h5>
                  <strong>
                    ${item.price * cart.items2[index]?.number_of_items}
                  </strong>
                </h5>
              </div>
              <a href="/cart" className="remove">
                <i className="tf-ion-close"></i>
              </a>
            </div>
          ))}
        <div className="cart-summary">
          <span>Total</span>
          <span className="total-price">{totalPrice}</span>
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
