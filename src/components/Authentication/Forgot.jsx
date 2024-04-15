import React from 'react'

const Forgot = () => {
  return (
    <>
     <h2 className="text-center">Welcome Back</h2>
          <form className="text-left clearfix">
            <p>Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.</p>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Account email address"/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-main text-center">Request password reset</button>
            </div>
          </form>
          <p className="mt-20"><a href="login.html">Back to log in</a></p>
    </>
  )
}

export default Forgot