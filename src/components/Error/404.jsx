import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page-404">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/home">
              <img src={logo} alt="site logo" />
            </Link>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/home" className="btn btn-main">
              <i className="tf-ion-android-arrow-back"></i> Go Home
            </Link>
            <p className="copyright-text">
              © 2018 Themefisher All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
