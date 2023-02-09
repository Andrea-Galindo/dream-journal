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
        <div
          className="w-100"
          style={{ maxWidth: "350px", marginLeft: ".5em" }}
        >
          <Card>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <Card.Title>{title.substring(0, 23)}</Card.Title>
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
