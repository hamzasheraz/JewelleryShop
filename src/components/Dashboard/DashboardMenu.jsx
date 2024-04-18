// DashboardMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = ({ active }) => {
  return (
    <ul className="list-inline dashboard-menu text-center">
      <li><Link to="/my-profile" className={active === 'dashboard' ? 'active' : ''}>Dashboard</Link></li>
      <li><Link to="/my-orders" className={active === 'orders' ? 'active' : ''}>Orders</Link></li>
      <li><Link to="/my-address" className={active === 'address' ? 'active' : ''}>Address</Link></li>
      <li><Link to="/profile-info" className={active === 'profile' ? 'active' : ''}>Profile Details</Link></li>
    </ul>
  );
};

export default DashboardMenu;
