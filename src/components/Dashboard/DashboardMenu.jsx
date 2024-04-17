// DashboardMenu.jsx
import React from 'react';

const DashboardMenu = ({ active }) => {
  return (
    <ul className="list-inline dashboard-menu text-center">
      <li><a href="dashboard.html" className={active === 'dashboard' ? 'active' : ''}>Dashboard</a></li>
      <li><a href="order.html" className={active === 'orders' ? 'active' : ''}>Orders</a></li>
      <li><a href="address.html" className={active === 'address' ? 'active' : ''}>Address</a></li>
      <li><a href="profile-details.html" className={active === 'profile' ? 'active' : ''}>Profile Details</a></li>
    </ul>
  );
};

export default DashboardMenu;
