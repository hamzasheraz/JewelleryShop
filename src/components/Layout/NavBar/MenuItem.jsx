import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, url }) => {
  return (
    <li className="dropdown">
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default MenuItem;
