import styled from 'styled-components';

const MyUl = styled.ul`
  display: flex;
  align-items: center;

  height: 60px;
  padding: 0;
  margin: 0;

  list-style: none;
`;

export const UL = ({children}) => {
  return <MyUl>{children}</MyUl>;
};
