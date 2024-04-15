import React from "react";

const Signup = () => {
  return (
    <>
      <h2 className="text-center">Create Your Account</h2>
      <form className="text-left clearfix" action="index.html">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-main text-center">
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-20">
        Already hava an account ?<a href="login.html"> Login</a>
      </p>
      <p>
        <a href="forget-password.html"> Forgot your password?</a>
      </p>
    </>
  );
};

export default Signup;
