import React from "react";
import CartNav from "./CartNav";
import Search from "./Search";
import LanguageSelector from "./LanguageSelector";

const TopRight = () => {
  return (
    <div className="col-md-4 col-xs-12 col-sm-4">
      <ul className="top-menu text-right list-inline">
        <CartNav />
        <Search />
        <LanguageSelector />
      </ul>
    </div>
  );
};

export default TopRight;
