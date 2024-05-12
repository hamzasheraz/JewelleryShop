import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/UserSlice/userSlice";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const Signup = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState(null); // Assuming birth date is a Date object
  const [image, setImage] = useState(null); // Assuming image is a file

  const handleChange = (event) => {
    const { name, value, files } = event.target;
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
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "birthDate":
        setBirthDate(value);
        break;
      case "image":
        setImage(files[0]);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password,
      phone_number: phoneNumber,
      birth_date: birthDate,
      image: image,
    };

    dispatch(registerUser(userData)).unwrap();
    Toast.fire({
      icon: "success",
      title: "ACcount registered",
    });
  };

  return (
    <>
      <h2 className="text-center">Create Your Account</h2>
      <form
        className="text-left clearfix"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Birth Date"
            name="birthDate"
            value={birthDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            name="image"
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-main text-center">
            Sign up
          </button>
        </div>
      </form>
      <p className="mt-20">
        Already have an account? <Link to="/">Login</Link>
      </p>
      <p>
        <a href="forget-password.html">Forgot your password?</a>
      </p>
    </>
  );
};

export default Signup;
