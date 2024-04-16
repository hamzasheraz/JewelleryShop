import React from "react";
import Items from "./Items";
import faqData from "../../../utils/faq";

const Questions = () => {
  return (
    <div className="col-md-8">
      {faqData.map((faq, index) => (
        <Items key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
};

export default Questions;
