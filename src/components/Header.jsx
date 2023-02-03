import React from "react";
import title from "../assets/title.png";
import "../styles/Header.css"

const Header = () => {
  return (
    <div>
      <img className="header-title" src={title} alt="title" />
    </div>
  );
};

export default Header;
