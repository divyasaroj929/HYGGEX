import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Button from "../../component/button/Button";
import hyggex from "../data/hyggex.svg";
const Navbar = () => {
  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Flashcard",
      path: "/flashcard ",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
  ];
  // console.log(navData);

  return (
    <div className="container-hold-navbar">
      <div className="link">
        <img src={hyggex} alt="" />
      </div>

      <div className="handle-left-side-navbar">
        <ul>
          {navData.map((item, index) => {
            console.log(item);
            return (
              <li key={index}>
                <NavLink to={item.path} className="link">
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          <Button />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
