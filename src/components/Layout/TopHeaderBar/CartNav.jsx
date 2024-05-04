import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getitems, getitems2 } from "../../Shop/Cart/Cart";

const CartNav = () => {
  const [total,settotal]=useState(0)
  const [nofitems, setItems] = useState(null);
  const [cartItems, setCartItems] = useState([]);
 
  const authToken = JSON.parse(localStorage.getItem('authtokens'));

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const items = await getitems(authToken);
    if (items) {
      setCartItems(items);
    }

    const items2 = await getitems2(authToken);
    if (items2) {
      setItems(items2);
      console.log("I am here in logo wala page")
    }
  }


  let calculate=()=>{
    let p=0;
    nofitems && cartItems.forEach((value, index) => {
      if (value.id ==nofitems[index].items) {
        console.log(index)
        p += value.price * nofitems[index].number_of_items;
      }
    })
    console.log("price is ",p)
    return p;

  }

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
        {nofitems && cartItems && cartItems.map((item, index) => ( 
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
                <span>{nofitems[index].number_of_items}</span> 
              </div>
              <h5>
                <strong>${item.price*nofitems[index].number_of_items}</strong> 
              </h5>
            </div>
            <a href="/cart" className="remove">
              <i className="tf-ion-close"></i>
            </a>
          </div>
        ))}
        <div className="cart-summary">
          <span>Total</span>
          <span className="total-price">{calculate()}</span>
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
