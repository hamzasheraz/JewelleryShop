import React from "react";
import Header from "../../Layout/Page-Header/Header";
import Info from "./Info";
import Questions from "./Questions";

const FAQ = () => {
  return (
    <>
      <Header title="Frequently Asked Question" page="f.a.q" />
      <section className="page-wrapper">
        <div className="container">
          <div className="row">
            <Info />
            <Questions />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
