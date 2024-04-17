import { useState } from "react";
import React from "react";
import Heroslider from "./Components/Heroslider";
import "./App.css";
import "./plugins/slick/slick.css";
import "./plugins/slick/slick-theme.css";
import "./plugins/animate/animate.css";
import ProductSections from "./Components/ProductSections";
import ProductsCategory from "./Components/ProductsCategory";
import Subscription from "./Components/Layout/Footer/Subscription";
import Footer from "./Components/Layout/Footer/Footer";

import Shop from "./Components/Shop";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import Pricing from "./Components/Pricing";
import Confirmation from "./Components/Confirmation";
import Productdetails from "./Components/Productdetails";
import Contact from "./Components/Introduction/Contact/Contact";
import About from "./Components/Introduction/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileDetails from "./Components/Dashboard/ProfileDetails";
import NotFound from "./Components/Error/404";
import Form from "./Components/Authentication/Form";
import TopHeader from "./Components/Layout/TopHeaderBar/TopHeader";
import NavBar from "./Components/Layout/NavBar/NavBar";
import FAQ from "./Components/Introduction/FAQ/FAQ";
import Address from "./Components/Dashboard/Address";
import Order from "./Components/Dashboard/Order";

function App() {
  return (
    <>
      {/* general homebar k components */}

      {/*    <Heroslider/> */}

      {/* <ProductsCategory/>
    <ProductSections/>
    <Subscription/> */}
      {/* <Footer/>  */}

      {/* it all contains shop walay k links */}
      <TopHeader/>
      <NavBar/>
      {/* <Address/> */}
      {/* <Order/> */}
      {/* <Shop /> */}
      {/* <Checkout/> */}
      {/* <Cart/> */}
      {/* <Pricing/> */}
      {/* <Confirmation/> */}
      {/* <Productdetails/> */}

      {/* contains pages walay links */}
      {/* <Contact /> */}
      {/* <About/> */}
      {/* <FAQ /> */}

      {/* <Form/> */}

      <Dashboard/>
      {/* <Order/> */}
      {/* <Address/> */}
      {/* <ProfileDetails/> */}

      {/* <NotFound/> */}
    </>
  );
}

export default App;
