import React from "react";
import addcardicon from "../../img/addcardicon.svg";
import midlogoicon from "../../img/midlogoicon.svg";
import "./publised.css";

const PublisedNavbar = () => {
  return (
    <div className="company-details">
      <div className="left-logo">
        <img src={midlogoicon} alt="" />
      </div>
      <div className="right-logo">
        <img src={addcardicon} alt="" />
      </div>
    </div>
  );
};

export default PublisedNavbar;
