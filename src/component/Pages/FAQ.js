import React, { useState } from "react";
import FAQLibary from "../others/FAQLibary";
import "./faq.css";

const FAQ = ({ FAQdata }) => {
  const [data, setData] = useState(FAQdata);
  console.log(data);

  console.log(data);

  return (
    <>
      <div className="main">
        <h1 className="h1">FAQ</h1>

        <div className="accordion">
          {data.map((item) => {
            console.log(item);
            return (
              <>
                <FAQLibary key={item.id} {...item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
