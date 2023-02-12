import React from "react";
import dream from "../assets/dream.png";
import "../styles/Header.css"


const Header = () => {
  return (
    <div className="display-flex justify-content-center">
      <img className="header-title mt-4" src={dream} alt="title" />
    </div>
  );
};

export default Header;
