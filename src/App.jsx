import { useState } from "react";
import React from "react";
import "./App.css";
// In your main file where you include global styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./plugins/animate/animate.css";
import ProductsCategory from "./Components/Home/ProductsCategory";
import Subscription from "./Components/Layout/Footer/Subscription";
import Footer from "./Components/Layout/Footer/Footer";

import Shop from "./Components/Shop/Shopping/Shop";
import Checkout from "./Components/Shop/Checkout/Checkout";
import Cart from "./Components/Shop/Cart/Cart";
import Confirmation from "./Components/Shop/Checkout/Confirmation";
import Contact from "./Components/Introduction/Contact/Contact";
import About from "./Components/Introduction/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileDetails from "./Components/Dashboard/ProfileDetails";
import NotFound from "./Components/Error/404";
import Form from "./Components/Authentication/Form";
import TopHeader from "./Components/Layout/TopHeaderBar/TopHeader";
import NavBar from "./Components/Layout/NavBar/NavBar";
import FAQ from "./Components/Introduction/FAQ/FAQ";
import Address from "./Components/Dashboard/Address";
import Order from "./Components/Dashboard/Order";
import FilterSection from "./Components/Shop/Shopping/FilterSection";
import TrendyProduct from "./Components/Home/TrendyProduct";
import HeroSlider from "./Components/Slider/HeroSlider";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Form page='login'/>}/>
    <Route path="/sign-up" element={<Form page='register'/>}/>
    <Route path="/forget-password" element={<Form page='forgot'/>}/>
    <Route path="/home" element={<Form page='forgot'/>}/>
    <Route path="*" element={<NotFound/>}/>
    
   </Routes>
    </>
  );
}

export default App;
