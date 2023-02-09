import React from "react";
import { Container, Card } from "react-bootstrap";

import DreamModal from "./DreamModal";

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
        <div>{date}</div>
        <div className="w-100" style={{ maxWidth: "400px", marginLeft: "1em" }}>
          <Card>
            <Card.Body className="d-flex justify-content-between">
              <Card.Title>{title}</Card.Title>
              {/* <Card.Text>{date}</Card.Text> */}
              <DreamModal
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
