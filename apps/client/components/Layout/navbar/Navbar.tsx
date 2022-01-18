import { Navbar, Container, Nav, Col } from 'react-bootstrap';
import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import { LinkLogo } from '@components/Logo/LinkLogo';
import Search from './Search';

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
