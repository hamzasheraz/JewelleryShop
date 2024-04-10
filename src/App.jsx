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
import ProductsCategory from './Components/ProductsCategory'
import TrendyProducts from './Components/TrendyProducts'
import Subscription from './Components/Subscription'
import Footer from './Components/Footer'

function App() {


  return (
    <>

    <Beforeline/>
    <Menu/>
    <Heroslider/>
    <ProductsCategory/>
    <TrendyProducts/>
    <Subscription/>
    <Footer/>
    
    {/* <Login/> */}
    {/* <SignUp/> */}

    </>
  )
}

export default App
