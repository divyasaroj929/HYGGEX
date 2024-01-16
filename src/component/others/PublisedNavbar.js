import React from "react";
import logo from "../data/logo.png";
import Clip from "../data/Clip.png";
import Ellipse from "../data/Ellipse.png";

import Frame from "../data/Frame.png";
import "./publised.css";

const PublisedNavbar = () => {
  return (
    <div className="company-details">
      <div className="left-logo">
        <div className="company-logo">
          <img src={Clip} alt="" />
        </div>
        <div className="title">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="right-logo">
        <div className="company-logo-right">
          <img src={Frame} alt="" />
        </div>
        <div className="para">
          <p>Create Flashcard</p>
        </div>
      </div>
    </div>
  );
};

export default PublisedNavbar;
