import React from "react";
import Signup from "./Signup";
import logo from "../../images/logo.png";
import Login from "./Login";
import Forgot from "./Forgot";

const Form = ({ page,setAuth }) => {
  return (
    <section className="signin-page account">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="block text-center">
              <a className="logo" href="index.html">
                <img src={logo} alt="" />
              </a>
              {page == "login" ? (
                <Login setauth={setAuth}/>
              ) : page == "register" ? (
                <Signup />
              ) : (
                <Forgot />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
