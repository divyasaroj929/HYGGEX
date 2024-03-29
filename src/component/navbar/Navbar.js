import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../component/button/Button";
import FAQ from "../Pages/FAQ";
import PopupModal from "../others/PopupModal";
import logo from "../../img/logo.svg";
import "./navbar.css";
const Navbar = () => {
  const [modal, setModal] = useState(false);

  const navData = [
    {
      name: "Home",
      path: "/HYGGEX",
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

  const closeForm = () => {
    setModal(false);
  };

  // console.log(navData);

  return (
    <>
      <div className="logo-link">
        <img src={logo} alt="" />
      </div>
      <div className="handle-left-side-navbar">
        <ul className="ul">
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
          <Button
            onClick={() => {
              setModal(true);
            }}
            name="Login"
          />
        </ul>
      </div>
      {modal && <PopupModal closeForm={closeForm} />}
    </>
  );
};

export default Navbar;
