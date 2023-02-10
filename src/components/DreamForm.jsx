import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import "../styles/DreamForm.css";

const DreamForm = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [peopleAndPlaces, setPeopleAndPlaces] = useState("");
  const [feelings, setFeelings] = useState("");

  // Create dream
  const createDream = async (e) => {
    e.preventDefault(e);
    // Add dream to collection "dreams"
    await addDoc(collection(db, "dreams"), {
      // await addDoc(collection(db, "users", user.uid, "dreams"), {
      uid: user.uid,
      date: date,
      title: title,
      description: description,
      peopleandplaces: peopleAndPlaces,
      feelings: feelings,
    });
    setDate("");
    setTitle("");
    setDescription("");
    setPeopleAndPlaces("");
    setFeelings("");
    navigate("/dreams");
  };

  return (
    <Container className="d-flex justify-content-center mt-3">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <Card>
          <Card.Body>
            <Form onSubmit={createDream}>
              <Form.Group id="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group id="title" className="mt-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  maxength="38"
                  rows={1}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Dream on</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>People and places</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  required
                  onChange={(e) => setPeopleAndPlaces(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Feelings</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  onChange={(e) => setFeelings(e.target.value)}
                />
              </Form.Group>
              <div className="dream-form-btn">
                <button
                  className="submit-dream-btn w-30 mx-auto mt-2 mr-2"
                  type="submit"
                >
                  save
                </button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default DreamForm;
