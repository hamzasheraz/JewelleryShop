
import Menu from "./Menu";


import React from "react";

function Cart() {
  return (
    <>
      <Menu />

      <div className="page-wrapper">
        <div className="cart shopping">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="block">
                  <div className="product-list">
                    <form method="post">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="">Item Name</th>
                            <th className="">Item Price</th>
                            <th className="">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td className="">
                              <div className="product-info">
                                <img
                                  width="80"
                                  src="/src/images/shop/cart/cart-1.jpg"
                                  alt=""
                                />
                                <a href="#!">Sunglass</a>
                              </div>
                            </td>
                            <td className="">$200.00</td>
                            <td className="">
                              <a className="product-remove" href="#!">
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr className="">
                            <td className="">
                              <div className="product-info">
                                <img
                                  width="80"
                                  src="/src/images/shop/cart/cart-2.jpg"
                                  alt=""
                                />
                                <a href="#!">Airspace</a>
                              </div>
                            </td>
                            <td className="">$200.00</td>
                            <td className="">
                              <a className="product-remove" href="#!">
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr className="">
                            <td className="">
                              <div className="product-info">
                                <img
                                  width="80"
                                  src="/src/images/shop/cart/cart-3.jpg"
                                  alt=""
                                />
                                <a href="#!">Bingo</a>
                              </div>
                            </td>
                            <td className="">$200.00</td>
                            <td className="">
                              <a className="product-remove" href="#!">
                                Remove
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="checkout.html"
                        className="btn btn-main pull-right"
                      >
                        Checkout
                      </a>
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
