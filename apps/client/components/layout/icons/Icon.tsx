import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Container, Image, ImageProps, Row } from 'react-bootstrap';

interface IconProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  text?: string;
  children?: ReactNode
}

const Icon = ({ width, height, text, children }: IconProps) => {
  return (
    <Container className="py-2 px-2">
      <Row>
        {children}
      </Row>
      <Row>
        <h6 className="text-secondary text-center mb-0">{text}</h6>
      </Row>
    </Container>
  );
};

export default Icon;
