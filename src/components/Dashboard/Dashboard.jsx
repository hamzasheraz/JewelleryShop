import React from "react";
import DashboardMenu from "./DashboardMenu";
import UserWelcome from "./UserWelcome";
import OrderTable from "./OrderTable";
import Header from "../Layout/Page-Header/Header";

const Dashboard = () => {
  // Sample data for orders
  const orders = [
    {
      id: 1,
      orderId: "#252125",
      date: "Mar 25, 2016",
      items: 2,
      totalPrice: "$99.00",
    },
    {
      id: 2,
      orderId: "#252125",
      date: "Mar 25, 2016",
      items: 2,
      totalPrice: "$99.00",
    },
    {
      id: 3,
      orderId: "#252125",
      date: "Mar 25, 2016",
      items: 2,
      totalPrice: "$99.00",
    },
    // Add more orders here...
  ];

  return (
    <>
      <Header title="Dashboard" page="dashboard" />
      <DashboardMenu active="dashboard" />
      <section class="user-dashboard page-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
            <div class="dashboard-wrapper user-dashboard">
              <UserWelcome userName="Adam Smith" imageUrl="images/avater.jpg" />
              <OrderTable orders={orders} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
