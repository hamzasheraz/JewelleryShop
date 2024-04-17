// CartItem.jsx
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <tr>
      <td>
        <div className="product-info">
          <img width="80" src={item.image} alt={item.name} />
          <a href="#!">{item.name}</a>
        </div>
      </td>
      <td>{item.price}</td>
      <td>
        <a className="product-remove" href="#!">
          Remove
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
