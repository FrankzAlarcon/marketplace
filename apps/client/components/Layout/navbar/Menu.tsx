import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
  return (
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav justify={true}>
          <Link passHref href="/#home">
            <Nav.Link>Inicio</Nav.Link>
          </Link>
          <Link passHref href="/#courses">
            <Nav.Link>Cursos</Nav.Link>
          </Link>
          <Link passHref href="/#contact">
            <Nav.Link>Contacto</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
};

export default Menu;
