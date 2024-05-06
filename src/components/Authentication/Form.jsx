import React from "react";
import Signup from "./Signup";
import logo from "../../images/logo.png";
import Login from "./Login";
import Forgot from "./Forgot";
import { Link } from "react-router-dom";

const Form = ({ page,setAuth }) => {
  return (
    <section className="signin-page account">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="block text-center">
              <Link className="logo" to="/">
                <img src={logo} alt="" />
              </Link>
              {page == "login" ? (
                <Login/>
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
