import { useState } from 'react'
import React from 'react'
import Beforeline from './Components/Beforeline'
import Menu from './Components/Menu'
import Heroslider from './Components/Heroslider'

import './App.css'

import './plugins/slick/slick.css'
import './plugins/slick/slick-theme.css'
import './plugins/animate/animate.css'

function App() {


  return (
    <>

    <Beforeline/>
    <Menu/>
    <Heroslider/>

    </>
  )
}

export default App
