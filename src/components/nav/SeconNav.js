import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, NavLink } from "react-bootstrap";

const SecondNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ValaryBestDelivery
          </Navbar.Brand>

          <Nav>
          <NavLink as={Link} to="/">
              Home
            </NavLink>{" "}
            <NavLink as={Link} to="/about">
              About Us
            </NavLink>{" "}
            <Nav.Link as={Link} to="/login">
              +254 723728496
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default SecondNavbar;
