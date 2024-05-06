import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
// import router from '../../Router/router';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = (props) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    axios
      .post("http://127.0.0.1:8000/token/", {
        username: name,
        password: password,
      })
      .then((response) => {
        console.log(response);
        const jwt_token = jwtDecode(response.data.access);
        console.log(jwt_token);
        setInfo(jwt_token);
        cookies.set("jwt_auth", jwt_token, {
          expires: new Date(jwt_token.exp * 1000),
        });
        localStorage.setItem("authtokens", JSON.stringify(response.data));
         props.setauth(false);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2 className="text-center">Welcome Back</h2>
      <form className="text-left clearfix" onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="form-control" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-main text-center">
            Login
          </button>
        </div>
      </form>
      <p className="mt-20">
        New in this site? <Link to="/sign-up">Create a New Account</Link>
      </p>
    </>
  );
};

export default Login;
