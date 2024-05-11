import React from "react";
import { API_URL } from "../../../config";
import { useSelector } from "react-redux";

const PaymentMethod = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="block">
      <h4 className="widget-title">Payment Method</h4>
      <p>Credit Card Details (Secure payment)</p>

      {cart.items?.length>0 && cart.items2?.length>0 ? ( // Check if cartItems has at least one item
        <form action={`${API_URL}/create-checkout-session/`} method="POST">
          <input
            type="hidden"
            name="product_name"
            value={cart.items
              .map((item) => `${item.Product_name}`)
              .join(",")} // Accessing the first item's property
          />
          <input
            type="hidden"
            name="price"
            value={cart.items.reduce((total, item, index) => {
              return (
                total +
                item.price * cart.items2[index].number_of_items * 100
              );
            }, 0)}
          />
          <button type="submit" className="btn btn-main mt-20">
            Place Order
          </button>
        </form>
      ) : (
        <p>Loading cart items...</p> // Display a loading message or spinner
      )}
    </div>
  );
};

export default PaymentMethod;
