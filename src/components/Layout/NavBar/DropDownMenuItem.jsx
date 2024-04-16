import React from "react";

function DropDownMenuItem({ title, children }) {
  return (
    <li className="dropdown dropdown-slide">
      <a
        href="#!"
        className="dropdown-toggle"
        data-toggle="dropdown"
        data-hover="dropdown"
        data-delay="350"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {title} <span className="tf-ion-ios-arrow-down"></span>
      </a>
      <ul className="dropdown-menu">
        <li className="dropdown-header">{title}</li>
        <li role="separator" className="divider"></li>
        {children}
      </ul>
    </li>
  );
}

export default DropDownMenuItem;
