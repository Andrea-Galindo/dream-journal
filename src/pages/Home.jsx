import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AppNavbar from "../components/AppNavbar";
import "../styles/Home.css";
import quotes from "../data/quotes.json";
import { RiDoubleQuotesL } from "react-icons/ri";

const Home = () => {
  function getRandomQuote() {
    const quote = quotes[(quotes.length * Math.random()) << 0];
    return quote;
  }

  const todayQuote = getRandomQuote();

  return (
    <>
      <AppNavbar />
      <Container className="d-flex align-items-center justify-content-center custom-container">
        <div className="w-100 custom-div" style={{ maxWidth: "500px" }}>
          <Card
            className="custom-card"
            style={{
              backgroundColor: "rgb(35, 38, 46)",
              border: "rgb(35, 38, 46",
            }}
          >
            <Card.Body className="custom-body mb-4">
              <RiDoubleQuotesL
                className="mb-2"
                style={{ color: "rgb(137, 146, 161)" }}
              />
              <blockquote className="blockquote mb-0">
                <p>
                 {todayQuote.quote}
                </p>
                <footer className="blockquote-footer">
                  {todayQuote.author}
                </footer>
              </blockquote>
              {/* <p style={{ fontSize: "14px" }}>
                {" "}
                {todayQuote.quote} <br />
                <span style={{ fontSize: "12px" }}>-{todayQuote.author}</span>
              </p> */}
              {/* <span style={{fontSize: "12px"}} >-{todayQuote.author}</span> */}
              {/* Of course it is happening inside your head, but why on earth
              should that mean that it is not real? */}
            </Card.Body>
          </Card>
          <LinkContainer to="/newdream">
            <Button className="new-dream-btn">New Dream</Button>
          </LinkContainer>
          {/* <Logo /> */}
        </div>
      </Container>
    </>
  );
};

export default Home;
