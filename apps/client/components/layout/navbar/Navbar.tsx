import { Navbar, Container, Nav, Col } from 'react-bootstrap';
import React from 'react';
import Menu from './Menu';
import Search from './Search';
import { LinkLogo } from '@components/logo/LinkLogo';

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect fixed="bottom" bg="dark" variant="dark">
      <Container fluid>
        <Col sm={3}>
          <LinkLogo />
        </Col>
        <Col sm={6}>
          <Menu />
        </Col>
        <Col sm={3}>
          <Search />
        </Col>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
