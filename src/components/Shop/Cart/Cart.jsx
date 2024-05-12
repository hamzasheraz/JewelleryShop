import React, { useEffect } from "react";
import CartTable from "./CartTable";
import DashboardMenu from "../../Dashboard/DashboardMenu";
import Header from "../../Layout/Page-Header/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const authToken = JSON.parse(localStorage.getItem("authtokens"));
  useEffect(() => {
    console.log("Cart items:", cart.items);
  }, [cart.items]);
  return (
    <>
      <Header title="My Cart" page="cart" />
      <DashboardMenu active="cart" />
      {cart.items && (
        <div className="page-wrapper">
          <div className="cart shopping">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="block">
                    <div className="product-list">
                      <form method="post">
                        {cart.items && cart.items2 && cart.items.length > 0 ? (
                          <>
                            <CartTable
                              items1={cart.items}
                              nofitems={cart.items2}
                            />
                            <Link
                              to="/checkout"
                              className="btn btn-main pull-right"
                            >
                              Checkout
                            </Link>
                          </>
                        ) : (
                          <p>No items in cart</p>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
