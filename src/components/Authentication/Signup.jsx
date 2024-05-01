import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/register', {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response);
        // Handle success, such as redirecting the user to another page
      })
      .catch((error) => {
        console.log(error);
        // Handle error, such as displaying an error message to the user
      });
  };

  return (
    <>
      <h2 className="text-center">Create Your Account</h2>
      <form className="text-left clearfix" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-main text-center">
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-20">
        Already have an account? <a href="login.html">Login</a>
      </p>
      <p>
        <a href="forget-password.html">Forgot your password?</a>
      </p>
    </>
  );
};

export default Signup;
