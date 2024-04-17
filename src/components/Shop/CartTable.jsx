// CartTable.jsx
import React from 'react';
import CartItem from './CartItem';

const CartTable = ({ items }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
