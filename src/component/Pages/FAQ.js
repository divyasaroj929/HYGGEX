import React, { useState } from "react";
import FAQLibary from "../others/FAQLibary";
import { useSpring, animated } from "react-spring";

import "./faq.css";
const FAQ = ({ FAQdata }) => {
  const [data, setData] = useState(FAQdata);

  console.log(data);
  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-30px)",
    },
    to: [{ transform: "translateY(15px)" }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <>
      {/* <animated.h1 style={titleAnimation} className="h1">
          FAQ
        </animated.h1> */}
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
