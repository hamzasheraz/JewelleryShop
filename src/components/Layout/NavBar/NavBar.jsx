import React from "react";
import NavBarHeader from "./NavBarHeader";
import NavBarLinks from "./NavBarLinks";
import MenuItem from "./MenuItem";
import DropDownMenuItem from "./DropDownMenuItem";

const NavBar = () => {
  return (
    <section className="menu">
      <nav className="navbar navigation">
        <div className="container">
          <NavBarHeader />
          {/* <NavBarLinks /> */}
          {/* Navbar Links */}
          <div id="navbar" className="navbar-collapse collapse text-center">
            <ul className="nav navbar-nav">
              {/* Home */}
              <MenuItem title="Home" url="index.html" />
              {/* Shop */}
              <DropDownMenuItem title="Shop">
                {/* Dropdown menu items */}
                <MenuItem title="Shop" url="shop.html" />
                <MenuItem title="Checkout" url="checkout.html" />
                <MenuItem title="Cart" url="cart.html" />
                {/* Add more menu items as needed */}
              </DropDownMenuItem>
              <DropDownMenuItem title="Introduction">
                <MenuItem title="Contact Us" url="shop.html" />
                <MenuItem title="About Us" url="checkout.html" />
                <MenuItem title="FAQ" url="cart.html" />
              </DropDownMenuItem>
              <MenuItem title="Blog" url="blog.html" />
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
