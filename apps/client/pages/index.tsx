import styled from 'styled-components';
import { Container, Row, Image, Button } from 'react-bootstrap'

export function Index() {
  return (
    <Container>
      <Button variant='success'>Click me!</Button>
      <Image src='https://via.placeholder.com/900x300'/>
    </Container>
  );
}

export default Index;
