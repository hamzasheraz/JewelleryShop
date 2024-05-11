import React from "react";
import CartItem from "./CartItem";

const CartTable = ({ items1, nofitems }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>No of items</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items1.map((item, index) =>
          item.id == nofitems[index].items ? (
            <CartItem key={index} item={item} nofitems={nofitems[index]} />
          ) : (
            <CartItem
              key={index}
              item={item}
              nofitems={{ number_of_items: 1 }}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default CartTable;
