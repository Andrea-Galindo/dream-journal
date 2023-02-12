import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FiBook } from "react-icons/fi";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineAddCircleOutline } from "react-icons/md";

import "../styles/AppNavbar.css";
import dream from "../assets/dream.png";

const AppNavbar = () => {
  return (
    <div className="page-header navbar-header">
      <Navbar className="custom-navbar">
        <Container className="nav-container">
          <LinkContainer to="/home">
            <Navbar.Brand>
              <img src={dream} style={{ width: "200px" }} />
            </Navbar.Brand>
          </LinkContainer>
          <Nav>
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
