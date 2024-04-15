import React from "react";
import ContactNumber from "./ContactNumber";
import Logo from "./Logo";
import TopRight from "./TopRight";

const TopHeader = () => {
  return (
    <section className="top-header">
      <div className="container">
        <div className="row">
          <ContactNumber />
          <Logo />
          <TopRight />
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
