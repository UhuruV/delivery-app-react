import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button,NavLink } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={ Link } to="/">ValaryBestDelivery</Navbar.Brand>

          <Nav>
          <NavLink  as={ Link } to="/">Home</NavLink>
            <NavLink  as={ Link } to="/about">About Us</NavLink>
            <Nav.Link  as={ Link } to="/login">Login</Nav.Link>
            <Button variant="warning">
              {" "}
              <Nav.Link eventKey={2} as={ Link } to="/sign-up" id="nav-link-sign-up">
                Sign Up
              </Nav.Link>
            </Button>
            {""}
          </Nav>
        </Container>
      </Navbar>

    </>
  );
};

export default NavbarComponent;
