import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import { LinkLogo } from '@components/Logo/LinkLogo';
import Search from './Search';
import Icon from '../icons/Icon';

const MobileNavbar = () => {
  const icons = [
    {
      src: 'https://img.icons8.com/ios/50/000000/home--v1.png',
      alt: 'Icono de Inicio',
      text: 'Inicio',
      href: '/#home',
    },
    {
      src: 'https://img.icons8.com/ios/50/000000/home--v1.png',
      alt: 'Icono de Sursos',
      text: 'Cursos',
      href: '/#courses',
    },
    {
      src: 'https://img.icons8.com/ios/50/000000/home--v1.png',
      alt: 'Icono de Contacto',
      text: 'Contacto',
      href: '/#contact',
    },
    {
      src: 'https://img.icons8.com/ios/50/000000/home--v1.png',
      alt: 'Icono de Perfil',
      text: 'Perfil',
      href: '/#account',
    },
  ];

  return (
    <Navbar
      collapseOnSelect
      fixed="bottom"
      expand="sm"
      bg="dark"
      variant="dark"
    >
      <Container fluid className="justify-content-center">
        {icons.map(({ src, alt, text }, index) => (
          <Col key={index + alt}>
            <Icon src={src} alt={alt} text={text} />
          </Col>
        ))}
      </Container>
    </Navbar>
  );
};

export default MobileNavbar;
