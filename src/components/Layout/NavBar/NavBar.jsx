import React from "react";
import NavBarHeader from "./NavBarHeader";
// import NavBarLinks from "./NavBarLinks";
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
              <MenuItem title="Home" url="/home" />
              {/* Shop */}
              <DropDownMenuItem title="Shop">
                {/* Dropdown menu items */}
                <MenuItem title="Shop" url="/shop" />
                <MenuItem title="Checkout" url="/checkout" />
                <MenuItem title="Cart" url="/cart" />
                {/* Add more menu items as needed */}
              </DropDownMenuItem>
              <DropDownMenuItem title="Introduction">
                <MenuItem title="Contact Us" url="/contact-us" />
                <MenuItem title="About Us" url="/about-us" />
                <MenuItem title="FAQ" url="/faq" />
              </DropDownMenuItem>
              <MenuItem title="Blog" url="/blog" />
              <DropDownMenuItem title="Dashboard">
                <MenuItem title="Profile Interface" url="/my-profile" />
                <MenuItem title="Orders" url='/my-orders' />
                <MenuItem title="Address" url='/my-address' />
                <MenuItem title="Details" url='/profile-info' />
              </DropDownMenuItem>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
