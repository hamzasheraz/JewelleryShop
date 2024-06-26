import React from "react";
import Social from "./Social";
import Fmenu from "./Fmenu";
import Subscription from "./Subscription";
import NewsFeed from "./NewsFeed";

function Footer() {
  return (
    <>
    <Subscription/>
    <NewsFeed/>
    <footer className="footer section text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Social />
            <Fmenu />
            <p className="copyright-text">Copyright &copy;2024</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
