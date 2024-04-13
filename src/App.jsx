import { useState } from 'react'
import React from 'react'
import Beforeline from './Components/Beforeline'
import Menu from './Components/Menu'
import Heroslider from './Components/Heroslider'
import './App.css'
import './plugins/slick/slick.css'
import './plugins/slick/slick-theme.css'
import './plugins/animate/animate.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Forgot from './Components/Forgot'
import ProductSections from './Components/ProductSections'
import ProductsCategory from './Components/ProductsCategory'
import Subscription from './Components/Subscription'
import Footer from './Components/Footer'

import Shop from './Components/Shop'
import Checkout from './Components/Checkout'
import Cart from './Components/Cart'
import Pricing from './Components/Pricing'
import Confirmation from './Components/Confirmation'
import Productdetails from './Components/Productdetails'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
  return (
    <>
    {/* general homebar k components */}
{/* 
    <Beforeline/>
    <Menu/>
    <Heroslider/>
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <Forgot/> */}
    <ProductsCategory/>
    <ProductSections/>
    <Subscription/>
    <Footer/> */}
   

   {/* it all contains shop walay k links */}
    {/* <Shop/> */}
    {/* <Checkout/> */}
    {/* <Cart/> */}
    {/* <Pricing/> */}
    {/* <Confirmation/> */}
    {/* <Productdetails/> */}


    {/* contains pages walay links */}
    {/* <Contact/> */}
    <About/>
    
    {/* <Login/> */}
    {/* <SignUp/> */}
    </>
  )
}

export default App
