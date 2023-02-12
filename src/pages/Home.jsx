import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AppNavbar from "../components/AppNavbar";
import "../styles/Home.css";
import sun from "../assets/sun.png";
import home from "../assets/home.png";

const Home = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="home-page">
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
              {/* <div className="mt-3" style={{fontFamily: "times", color: "rgb(230, 214, 176"}}>THIS JOURNAL BELONGS TO: <br/>{user}<hr style={{height: "1px", marginTop: "0"}}/></div> */}
              <img style={{ width: "350px" }} src={home}></img>
              <div>
                {user}
                <hr style={{ height: "1px", marginTop: "0", font: "times"}} />
              </div>
            </Card.Body>
          </Card>
          <LinkContainer to="/newdream">
            <Button className="new-dream-btn">create</Button>
          </LinkContainer>
          {/* <Logo /> */}
        </div>
      </Container>
    </div>
  );
};

export default Home;
