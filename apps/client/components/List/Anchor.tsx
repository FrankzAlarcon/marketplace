import { Colors } from '@components/Colors';
import styled from 'styled-components';

const MyAnchor = styled.a`
  padding: 8px;

  text-decoration: none;

  color: ${Colors.white};
  border: 1px solid var(--white);
  border-radius: 8px;
`;

export const Anchor = (props) => {
  return <MyAnchor href={props.href}>{props.children}</MyAnchor>;
};
