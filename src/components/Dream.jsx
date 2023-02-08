import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../styles/Dream.css";
// import { AiOutlineDelete } from "react-icons/ai";
// import { FaRegEdit } from "react-icons/fa";
// import "../styles/Dream.css";
// import EditDream from "./EditDream";

import EditDream from "./EditDream";

const Dream = ({
  id,
  date,
  title,
  description,
  feelings,
  peopleandplaces,
  onDelete,
  onUpdate,
}) => {
  return (
    <li className="list-unstyled mt-3">
      <Container className="d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{date}</Card.Text>
              <EditDream
                id={id}
                date={date}
                title={title}
                description={description}
                feelings={feelings}
                peopleandplaces={peopleandplaces}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            </Card.Body>
          </Card>
        </div>
      </Container>
    </li>
  );
};

export default Dream;
