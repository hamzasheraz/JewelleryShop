import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config";

export async function getitems2(authToken) {
  try {
    const response = await axios.get("http://127.0.0.1:8000/getcartitemstwo", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken.access}`,
      },
    });
    console.log(response.data, "data from cart items2 payment page");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items2:", error);
  }
}

export async function getitems(authToken) {
  try {
    const response = await axios.get("http://127.0.0.1:8000/getcartitems", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken.access}`,
      },
    });
    console.log(response.data, "data from cart items payment page");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
}

const PaymentMethod = () => {
  const [nofitems, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const authToken = JSON.parse(localStorage.getItem("authtokens"));

  useEffect(() => {
    fetchItems();
  }, []); // Dependency array is empty, so this runs once on mount

  async function fetchItems() {
    const items = await getitems(authToken);
    console.log(items, "items fetched"); // Log to check the fetched data
    if (items) {
      setCartItems(items);
    }

    const items2 = await getitems2(authToken);
    console.log(items2, "items2 fetched"); // Log to check the fetched data
    if (items2) {
      setItems(items2);
    }
  }

  // Conditional rendering to ensure cartItems has data before accessing it
  return (
    <div className="block">
      <h4 className="widget-title">Payment Method</h4>
      <p>Credit Card Details (Secure payment)</p>
      
      {cartItems.length > 0 && nofitems.length>0 ? ( // Check if cartItems has at least one item
        <form action={`${API_URL}/create-checkout-session/`} method="POST">
          <input
            type="hidden"
            name="product_name"
            value={cartItems[0].Product_name} // Accessing the first item's property
          />
          <input type="hidden" name="price" value={cartItems[0].price *nofitems[0].number_of_items*100} />
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