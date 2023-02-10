import React, { useState } from "react";
import Dream from "./Dream";
import { Container } from "react-bootstrap";

const ListDreams = ({ dreamsData, onDelete, onUpdate, onSearch }) => {
  const [dreams, setDreams] = useState(dreamsData);
  const [filteredDreams, setFilteredDreams] = useState(dreams);

  return (
    <>
      <Container className="d-flex justify-content-center mt-3">
        <div className="w-100 m-2" style={{ maxWidth: "600px" }}>
          <input
            className="form-control form-input"
            placeholder="Search by people and places"
            type="text"
            onChange={(event) => onSearch(event)}
          />
        </div>
      </Container>
      <div style={{ padding: 10 }}>
        {filteredDreams.map((dream) => {
          return (
            <Dream
              key={dream.id}
              id={dream.id}
              date={dream.date}
              title={dream.title}
              description={dream.description}
              feelings={dream.feelings}
              peopleandplaces={dream.peopleandplaces}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>

      {dreams.length === 0 && (
        <div className="m-5 text-center">
          You have not yet created dream records
        </div>
      )}
    </>
  );
};

export default ListDreams;
