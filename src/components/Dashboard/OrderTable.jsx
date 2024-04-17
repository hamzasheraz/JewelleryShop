// OrderTable.jsx
import React from "react";

const OrderTable = ({ orders }) => {
  return (
    <div className="total-order mt-20">
      <h4>Total Orders</h4>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <a href="#!">{order.orderId}</a>
                </td>
                <td>{order.date}</td>
                <td>{order.items}</td>
                <td>{order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
