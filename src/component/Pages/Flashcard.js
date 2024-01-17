import React, { Children, useEffect, useState } from "react";
import { CenterTab, FAQdata, Slider } from "../data/data";
import { NavLink } from "react-router-dom";
import Vectorrestart from "../data/Vectorrestart.png";
import Vectoradd from "../data/Vectoradd.png";
import Vectorback from "../data/Vectorback.png";
import Vectorscreen from "../data/Vectorscreen.png";

const Flashcard = ({ Children }) => {
  const [current, setCurrent] = useState(0);
  const length = Slider.length;

  useEffect(() => {
    const next = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 2000);

    return () => clearInterval(next);
  }, [current]);

  const nextSlideButton = () => {
    console.log(current, "next");
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prvSlideButton = () => {
    console.log(current, "prv");

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <div className="center-tab">
        <h1>Relations and Functions ( Mathematics )</h1>
        <div className="center-navbar">
          <ul>
            {CenterTab.map((item, index) => {
              console.log(item);
              return (
                <li key={index}>
                  <NavLink to={item.path} className="link">
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="center-img-carousal">
        {Slider.map((slide, index) => {
          return (
            <div
              className={
                current === index ? "silder_active_div_image" : "deactive"
              }
              key={index}
            >
              <img src={slide.img} alt="pic" className="auto-image-silde" />
            </div>
          );
        })}

        <div className="arrow-silde">
          <img src={Vectorrestart} alt="" className="img-size-before" />
          <div className="arrow-silde-center">
            <img
              src={Vectorback}
              alt=""
              onClick={nextSlideButton}
              className="img-size"
            />
            <text className="text">01/10</text>
            <img
              src={Vectoradd}
              alt=""
              onClick={prvSlideButton}
              className="img-size"
            />
          </div>
          <img src={Vectorscreen} alt="" className="img-size-before" />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
