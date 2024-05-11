import React from "react";

const Forgot = () => {
  return (
    <>
      <h2 className="text-center">Welcome Back</h2>
      <form className="text-left clearfix">
        <p>
          Please press button to change password for account. A verification
          code will be sent to you. Once you have received the verification
          code, you will be able to choose a new password for your account.
        </p>
        <div className="form-group"></div>
        <div className="text-center">
          <a href="http://127.0.0.1:8000/reset_password/">
            <button type="button" className="btn btn-main text-center">
              Request password reset
            </button>
          </a>
        </div>
      </form>
      <p className="mt-20">
        <a href="login">Back to log in</a>
      </p>
    </>
  );
};

export default Forgot;
