import React from "react";
import AppNavbar from "../components/AppNavbar";
import DreamForm from "../components/DreamForm";
import "../styles/NewDream.css";

const NewDream = () => {
  return (
    <div className="new-dream-page">
      <AppNavbar />
      <DreamForm />
    </div>
  );
};

export default NewDream;
