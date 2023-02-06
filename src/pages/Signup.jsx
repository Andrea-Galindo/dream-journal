import React, { useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import "../styles/Signup.css";
import { UserAuth } from "../context/AuthContext";
// import Header from "./Header";

const Signup = () => {
  // save name to store it in "users" collection. Feature currently not working
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await createUser(email, password).then((credentials) => {
        setCurrentUserId(credentials.user.uid);
        console.log(currentUserId);
      });
      navigate("/home");
      // console.log(email, password);
    } catch (e) {
      setError(e.message);
      if (e.message === "Firebase: Error (auth/invalid-email).") {
        setError("invalid email");
      } else {
      }
      console.log(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      {/* <div className="page-header">
        <Header />
      </div> */}
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group id="passwordConfirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </Form.Group>
                <Button className="w-100 custom-bttn" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;