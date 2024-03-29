import React, { useState } from "react";
import FAQLibary from "../others/FAQLibary";
import { faqdata } from "../../data";
import "./faq.css";
function FAQ() {
  return (
    <>
      <h1 className="faq-h1">FAQ</h1>
      <ul className="accordion-list">
        {faqdata.map((item, index) => {
          console.log(item);
          return (
            <>
              <FAQLibary {...item} />
            </>
          );
        })}
      </ul>
    </>
  );
}
export default FAQ;
