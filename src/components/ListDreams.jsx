import React, { useState } from "react";
import Dream from "./Dream";
// import "../styles/ListDreams.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import DreamModal from "./DreamModal";

const ListDreams = ({ dreamsData, onDelete, onUpdate, onSearch }) => {
  const [dreams, setDreams] = useState(dreamsData)
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
            <li key={dream.id} className="list-unstyled mt-3">
              <Container className="d-flex align-items-center justify-content-center">
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Card className="dream-card">
                    <Card.Body>
                      <Card.Title>{dream.title}</Card.Title>
                      <Card.Text>{dream.date}</Card.Text>
                      <DreamModal
                        id={dream.id}
                        date={dream.date}
                        title={dream.title}
                        description={dream.description}
                        feelings={dream.feelings}
                        peopleandplaces={dream.peopleandplaces}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                      />
                    </Card.Body>
                  </Card>
                </div>
              </Container>
            </li>
          );
        })}
      </div>

      {dreams.length === 0 && (
        <div className="m-5 text-center">You have not yet created dream records</div>
      )}
      {/* {filteredDreams.length > 0 && (
        <ListDreams
        dreamsData={dreams}
        searchData={serachDreams}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
       )}     */}
    </>
  );
};

export default ListDreams;
