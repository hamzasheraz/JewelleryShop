import React from 'react'
import logo from '../images/logo.png';

const Login = () => {
  return (
    <section className="signin-page account">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="block text-center">
            <a className="logo" href="index.html">
              <img src={logo} alt=""/>
            </a>
            <h2 className="text-center">Welcome Back</h2>
            <form className="text-left clearfix" action="index.html" >
              <div className="form-group">
                <input type="email" className="form-control"  placeholder="Email"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password"/>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-main text-center" >Login</button>
              </div>
            </form>
            <p className="mt-20">New in this site ?<a href="signin.html"> Create New Account</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login