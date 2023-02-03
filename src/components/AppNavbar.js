import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GrBook } from "react-icons/gr";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Header from "./Header";

const AppNavbar = () => {
  return (
    <div className="page-header">
      <Navbar className="custom-navbar">
        <Container>
          <Navbar.Brand className="nav-title">
            <LinkContainer to="/home">
              <Nav.Link>
                <Header />
              </Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Nav>
            <LinkContainer to="/newdream">
              <Nav.Link>
                <MdOutlineAddCircleOutline />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dreams">
              <Nav.Link>
                <GrBook />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/settings">
              <Nav.Link>
                <RiSettings5Fill />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>

        {/* <Navbar.Toggle />
      <Navbar.Collapse id="collapse-navbar-nav"> */}

        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default AppNavbar;
