import { Colors } from '@components/Colors';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = ({ width = 30, height = 30, children }) => {
  return (
    <Container>
      <Image
        alt="logo"
        src="https://avatars.githubusercontent.com/u/84605041?s=200&v=4"
        width={width}
        height={height}
        className="d-inline-block align-top"
      />
      {children}
    </Container>
  );
};
