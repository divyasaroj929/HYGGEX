import React, { useState } from "react";
import accrodianicon from "../../img/accrodianicon.svg";

const FAQLibary = ({ question, answer }) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div
        className={`accordion-item ${opened && "accordion-item--opened"}`}
        onClick={() => setOpened(!opened)}
      >
        <div className="accordion-item__line">
          <h3 className="accordion-item__title">{question}</h3>
          <span className="accordion-item__icon">{accrodianicon}</span>
        </div>
        <div className="accordion-item__inner">
          <div className="accordion-item__content">
            <p className="accordion-item__paragraph">{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQLibary;
