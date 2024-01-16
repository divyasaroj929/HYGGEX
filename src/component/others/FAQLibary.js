import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useSpring, animated } from "react-spring";

const FAQLibary = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  let toggleHandler = (e) => {
    setOpen(!open);
  };

  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? "black" : "black",
    },
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "200px" : "25px" },
    config: { duration: "300" },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "black" : "black",
    },
    config: { duration: "120" },
  });

  return (
    <>
      <animated.div className="accordion-item" style={openAnimation}>
        <div className="accordion-heading" onClick={toggleHandler}>
          <h4 style={styles.accordionTitle}>{question}</h4>

          <animated.i style={iconAnimation}>
            <BiChevronDown />
          </animated.i>
        </div>
        <div className="accordion_content">{answer}</div>
      </animated.div>
    </>
  );
};

export default FAQLibary;
