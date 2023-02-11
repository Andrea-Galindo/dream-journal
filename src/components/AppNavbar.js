import React from "react";
import "../styles/AppNavbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FiBook } from "react-icons/fi";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import Header from "./Header";

const AppNavbar = () => {
  return (
    <div className="page-header navbar-header">
      <Navbar className="custom-navbar">
        <Container className="nav-container">
        <Navbar.Brand><div style={{fontFamily: "times", fontSize: "25px", color: "rgb(230, 214, 176"}}>Dream Journal</div></Navbar.Brand>
          <Nav>
            <LinkContainer to="/home">
              <Nav.Link>
                <FiHome
                  className="nav-icon"
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/newdream">
              <Nav.Link>
                <MdOutlineAddCircleOutline className="nav-icon" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dreams">
              <Nav.Link>
                <FiBook className="nav-icon" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/settings">
              <Nav.Link>
                <RiSettings5Fill className="nav-icon" />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
