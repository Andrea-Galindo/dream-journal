import React from "react";
import Dream from "./Dream";
// import "../styles/ListDreams.css";
import { Link, useNavigate } from "react-router-dom";

const ListDreams = ({ dreamsData, onDelete, onUpdate }) => {
  const getDreamsList = (dreamsData) => {
    return dreamsData.map((dream) => {
      return (
        <Dream
          key={dream.id}
          id={dream.id}
          date={dream.date}
          title={dream.title}
          description={dream.description}
          peopleandplaces={dream.peopleandplaces}
          feelings={dream.feelings}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      );
    });
  };
  return <ul>{getDreamsList(dreamsData)}</ul>;
};

export default ListDreams;
