import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AppNavbar from "../components/AppNavbar";
import "../styles/Home.css";
import diary from "../assets/diary.png";

const Home = () => {
  return (
    <>
      <AppNavbar />
      <Container className="d-flex align-items-center justify-content-center custom-container">
        <div className="w-100 custom-div" style={{ maxWidth: "500px" }}>
          <Card className="custom-border">
            <Card.Body className="custom-body">
              Of course it is happening inside your head, but why on earth
              should that mean that it is not real?
            </Card.Body>
          </Card>
          <LinkContainer to="/newdream">
            <Button className="new-dream-btn">New Dream</Button>
          </LinkContainer>
          <img className="diary" src={diary}></img>
        </div>
      </Container>
    </>
  );
};

export default Home;
