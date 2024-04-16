import React from 'react';

function NavBarHeader() {
  return (
    <div className="navbar-header">
      <h2 className="menu-title">Main Menu</h2>
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
  );
}

export default NavBarHeader;
