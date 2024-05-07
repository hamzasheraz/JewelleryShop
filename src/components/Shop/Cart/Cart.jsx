import React, { useEffect } from "react";
import CartTable from "./CartTable";
import DashboardMenu from "../../Dashboard/DashboardMenu";
import Header from "../../Layout/Page-Header/Header";
import { useState } from "react";
import { Link } from "react-router-dom";

export async function getitems2(authToken) {
  try {
    console.log('Bearer ' + String(authToken.access), "Sending this");
    let response = await fetch('http://127.0.0.1:8000/getcartitemstwo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authToken.access)
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      // console.log(data, "data from cart items2");
      return data;
    }
  } catch (error) {
    console.error('Error fetching cart items2:', error);
  }
}

export async function getitems(authToken) {
  try {
    console.log('Bearer ' + String(authToken.access), "Sending this");
    let response = await fetch('http://127.0.0.1:8000/getcartitems', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authToken.access)
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      // console.log(data, "data from cart items");
      return data;
    }
  } catch (error) {
    console.error('Error fetching cart items:', error);
  }
}


function Cart() {
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
    }
  }

  return (
    <>
      <Header title="My Cart" page="cart" />
      <DashboardMenu active="cart" />
      <div className="page-wrapper">
        <div className="cart shopping">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="block">
                  <div className="product-list">
                    <form method="post">
                      {cartItems && nofitems ? (
                      
                        <CartTable items1={cartItems} nofitems={nofitems} />
                        // <CartNav  items1={cartItems} nofitems={nofitems} />
                        
                      ) : (
                        <p>Not Avail</p>
                      )}
                      <Link to="/checkout" className="btn btn-main pull-right">
                        Checkout
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
