import React from "react";
import vectorAngle from "../data/VectorAngle.png";
import vectorHome from "../data/VectorHome.png";
import "./path.css";
const Path = () => {
  return (
    <div>
      <div className="path">
        <img src={vectorHome} alt="" />
        <img src={vectorAngle} alt="" className="angle" />
        <p>Flashcard</p>
        <img src={vectorAngle} alt="" className="angle" />
        <p>Mathematics</p>
        <img src={vectorAngle} alt="" className="angle" />
        <p>Relation and Function</p>
      </div>
    </div>
  );
};

export default Path;
