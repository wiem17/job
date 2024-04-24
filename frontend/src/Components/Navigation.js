import "./Navigation.css";
import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importez les styles Bootstrap
import { LinkContainer } from "react-router-bootstrap";



import { NavLink } from "react-router-dom";

const Navigation = () => {


  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Recrutement</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
         

          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>

         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
