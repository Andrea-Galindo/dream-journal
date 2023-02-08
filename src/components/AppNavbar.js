import React from "react";
import "../styles/AppNavbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FiBook } from "react-icons/fi";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FiHome } from "react-icons/fi";


const AppNavbar = () => {
  return (
    <div className="page-header navbar-header">
    <Navbar className="custom-navbar">
      <Container>
        <Nav>
          <LinkContainer to="/home">
            <Nav.Link>
              <FiHome />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/newdream">
            <Nav.Link>
              <MdOutlineAddCircleOutline />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dreams">
            <Nav.Link>
              <FiBook />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/settings">
            <Nav.Link>
              <RiSettings5Fill />
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  </div>
  );
};

export default AppNavbar;
