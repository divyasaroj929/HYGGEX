import React from "react";
import { useNavigate } from "react-router-dom";
import addcardicon from "../../img/addcardicon.svg";
import midlogoicon from "../../img/midlogoicon.svg";
import "./publised.css";

const PublisedNavbar = () => {
  const navigate = useNavigate();
  const routeFlashcard = () => {
    navigate("/flashcard");
  };
  return (
    <div className="company-details">
      <div className="left-logo">
        <img src={midlogoicon} alt="" />
      </div>
      <div className="right-logo">
        <img src={addcardicon} alt="" onClick={routeFlashcard} />
      </div>
    </div>
  );
};

export default PublisedNavbar;
