// ProductItem.jsx
import React from "react";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const [numberofitems,setnumberofitems]=useState(1)
  const authToken = JSON.parse(localStorage.getItem('authtokens'));
  const jwt_token = jwtDecode(authToken.access);
  console.log(jwt_token.user_id)
  const increaseItems = () => {
    setnumberofitems(numberofitems + 1);
  };

  const decreaseItems = () => {
    if (numberofitems > 1) {
      setnumberofitems(numberofitems - 1);
    }
  };

  let addtocart = async () => {
    console.log('Bearer ' + String(authToken.access), "Sending this");
    let response = await fetch('http://127.0.0.1:8000/addtocart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authToken.access)
        },
        body: JSON.stringify({ 
          user: jwt_token.user_id, // Assuming jwt_token contains the user_id         
          items: product.id,
          number_of_items: numberofitems // Assuming numberofitems contains the desired quantity
        })
    });

    let data = await response.json();
    if (response.ok) {
        console.log(data);
    } else {
        console.error('Failed to add to cart:', data);
    }
}




return (
  <div className="col-md-4">
    <div className="product-item">
      <div className="product-thumb">
        {product.sale && <span className="bage">Sale</span>}
        <img
          className="img-responsive"
          src={"http://127.0.0.1:8000/" + product.image}
          alt={product.Product_name}
        />
        <div className="preview-meta">
          {numberofitems}
          <ul>
            <li>
            <button onClick={(e) => { e.preventDefault(); increaseItems(); }}>
  <i className="tf-ion-ios-baseline-add"></i>
  Add
</button>
            </li>
            <li>
            <button onClick={(e) => { e.preventDefault(); decreaseItems(); }}>
  <i className="tf-ion-ios-baseline-add"></i>
  Sub
</button>
            </li>
            <li>
            <button onClick={(e) => { e.preventDefault(); addtocart(); }}>
  <i className="tf-ion-android-cart"></i>
</button>

            </li>
          </ul>
        </div>
      </div>
      <div className="product-content">
        <h4>
          <a href="product-single.html">{product.Product_name}</a>
        </h4>
        <p className="price">{"Price :" + product.price}</p>
        <p className="price">{"TotalItems : " + numberofitems}</p>
      </div>
    </div>
  </div>
);
};

export default ProductItem;
