
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/order">Order</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
