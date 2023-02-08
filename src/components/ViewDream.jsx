import React, { useState } from "react";
import { Modal, Card, Button, Form, Container, Alert } from "react-bootstrap";
// import "../styles/ViewDream.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewDream({
  id,
  date,
  title,
  description,
  feelings,
  peopleandplaces,
  onUpdate,
  onDelete,
}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnDelete = (id) => {
    onDelete(id);
    navigate("/dreams");
  };

  return (
    <>
      <Button className="view-dream-btn" onClick={handleShow}>
        view
      </Button>

      <Modal show={show} scrollable={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex align-items-center justify-content-center mt-3">
            <div className="w-100" style={{ maxWidth: "600px" }}>
              <Card>
                <Card.Body className="modal-dialog-scrollable">
                  <p>{date}</p>
                  <Card.Title>Description</Card.Title>
                  <p>{description}</p>
                  <Card.Title>People and Places</Card.Title>
                  <p>{peopleandplaces}</p>
                  <Card.Title>Feelings</Card.Title>
                  <p>{feelings}</p>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Link
            to="/editdream"
            state={{
              id: id,
              title: title,
              date: date,
              description: description,
              feelings: feelings,
              // peopleandplaces: peopleandplaces,
              onDelete: onDelete,
              // onUpdate: onUpdate,
            }}
          >
            <button>Edit</button>
          </Link>
          {/* <EditDream
            id={id}
            date={date}
            title={title}
            description={description}
            feelings={feelings}
            peopleandplaces={peopleandplaces}
            onUpdate={onUpdate}
            onDelete={onDelete}
          /> */}
          {/* <button className="btn" onClick={e => window.confirm('sure?') ? onDelete(id) : e.preventDefault()}form="edit-dream" variant="primary"></button> */}
          <button
            className="delete-btn"
            onClick={() => handleOnDelete(id)}
            form="edit-dream"
            variant="primary"
          >
            delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewDream;
