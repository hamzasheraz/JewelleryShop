import React from 'react'

const Login = () => {
  return (
    <>
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
    </>
  )
}

export default Login