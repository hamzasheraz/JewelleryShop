import React from "react";
import "./css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./plugins/animate/animate.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import Login from "./Components/Authentication/Login";
import Form from "./Components/Authentication/Form";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    console.log("checking")
    const authTokens = localStorage.getItem('authtokens');
    return authTokens ? true:false;
  });
  return (
    <>
      {/* <RouterProvider router={router} />  */}
      {
       
        !isAuthenticated?<RouterProvider router={router} /> :<Login setauth={setIsAuthenticated}/> 

      }
    </>
  );
}

export default App;
