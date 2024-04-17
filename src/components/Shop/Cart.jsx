import React from "react";
import CartTable from './CartTable';
import Header from "../Layout/Page-Header/Header";

function Cart() {
  const cartItems = [
    { name: 'Sunglass', price: '$200.00', image: '/src/images/shop/cart/cart-1.jpg' },
    { name: 'Airspace', price: '$200.00', image: '/src/images/shop/cart/cart-2.jpg' },
    { name: 'Bingo', price: '$200.00', image: '/src/images/shop/cart/cart-3.jpg' },
    // Add more items here...
  ];

  return (
    <>
    <Header title='My Cart' page='cart'/>
      <div className="page-wrapper">
        <div className="cart shopping">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="block">
                  <div className="product-list">
                    <form method="post">
                      <CartTable items={cartItems} />
                      <a href="checkout.html" className="btn btn-main pull-right">
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
