import React from "react";
import OrderSummary from './OrderSummary';
import CouponModal from './CouponModal';
import Header from "../../Layout/Page-Header/Header";
import BillingDetails from "./BillingDetails";
import PaymentMethod from "./PaymentMethod";

function Checkout() {
  const products = [
    { name: 'Ambassador Heritage 1921', price: '$249', quantity: '1', image: 'src/images/shop/cart/cart-1.jpg', link: 'product-single.html' },
    // Add more products here...
  ];
  const subtotal = '$190';
  const shipping = 'Free';
  const total = '$250';

  return (
    <>
    <Header title='Checkout' page='checkout'/>
      <div className="page-wrapper">
        <div className="checkout shopping">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
               <BillingDetails/>
               <PaymentMethod/>
              </div>
              <div className="col-md-4">
                <OrderSummary products={products} subtotal={subtotal} shipping={shipping} total={total} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CouponModal />
    </>
  );
}

export default Checkout;

