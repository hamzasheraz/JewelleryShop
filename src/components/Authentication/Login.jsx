import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "../../redux/slices/UserSlice/userSlice";
import { fetchProductDetails } from "../../redux/slices/ProductSlice/productSlice";
import { fetchCartItems } from "../../redux/slices/CartSlice/cartSlice";
import { fetchCartNoItems } from "../../redux/slices/CartSlice/cartSlice";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch();
  const [isAuthenticated, setAuth] = useState(false);

  useEffect(() => {
    console.log("checking");
    const authTokens = localStorage.getItem("authtokens");
    if (authTokens) setAuth(true);
  }, []);

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
        const jwt_token = jwtDecode(response.data.access);
        setInfo(response.data);
        cookies.set("jwt_auth", jwt_token, {
          expires: new Date(jwt_token.exp * 1000),
        });
        localStorage.setItem("authtokens", JSON.stringify(response.data));
        dispatch(fetchUserDetails());
        dispatch(fetchProductDetails());
        dispatch(fetchCartItems());
        dispatch(fetchCartNoItems());
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let updateToken = () => {
    axios
      .post("http://127.0.0.1:8000/token/refresh/", {
        refresh: info.refresh,
      })
      .then(
        (response) => {
          console.log(response, "from update");
          const jwt_token = jwtDecode(response.data.access);
          setInfo(response.data);
          cookies.set("jwt_auth", jwt_token, {
            expires: new Date(jwt_token.exp * 1000),
          });
          localStorage.setItem("authtokens", JSON.stringify(response.data));
        },
        (error) => {
          //logout the user

          localStorage.removeItem("authtoken");
          // props.setauth(true);
          //not possible now but redirect the user to login page after logging out
        }
      );
  };

  //dont remove it.. It will be used when redux will be built

  // useEffect(()=>{
  //   let interval=setInterval(()=>{
  //     if(info){
  //       console.log("update token callled")
  //       updateToken()
  //     }
  //   },2000)

  //   return ()=>clearInterval(interval)

  // },[info,loading])

  return (
    <>
      {isAuthenticated ? (
        navigate("/home")
      ) : (
        <>
          <h2 className="text-center">Welcome Back</h2>
          <form className="text-left clearfix" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                placeholder="Email"
              />
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
          <p className="mt-20">
            Forgot Password?<Link to="/forgot-password">Reset It.</Link>
          </p>
        </>
      )}
    </>
  );
};

export default Login;
