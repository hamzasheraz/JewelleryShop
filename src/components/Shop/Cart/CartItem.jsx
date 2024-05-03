// CartItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const CartItem = ({ item,nofitems}) => {
  const authToken = JSON.parse(localStorage.getItem('authtokens'));


  let deleteitem = async (id1) => {
    console.log('Bearer ' + String(authToken.access), "Sending this");
    let response = await fetch('http://127.0.0.1:8000/deletecartitem', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authToken.access)
      },
      body: JSON.stringify({
        id: id1
      })
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data) // Update setItems with the response data
    }
  }


  return (
    <tr>
      <td>
        <div className="product-info">
          <img width="80" src={"http://127.0.0.1:8000/" + item.image} alt={item.name} />
          {item.name}
        </div>
      </td>
      <td>{item.price}</td>
      <td>{nofitems.number_of_items}</td>
      <td>
        <button onClick={()=>deleteitem(nofitems.id)}>
        <div className="product-remove" >
          <a href="/cart">
          Remove
          </a>
        </div>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
