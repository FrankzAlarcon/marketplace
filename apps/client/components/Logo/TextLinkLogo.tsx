import { Colors } from '@components/Colors';
import styled from 'styled-components';
import { LinkLogo } from './LinkLogo';

const Text = styled.p`
  margin: 0;
  padding: 0 2px;

  color: ${Colors.white};

  @media only screen and(max-width: 768px) {
    display: none;
  }
`;

export const TextLinkLogo = ({ href, text, width = 30, height = 30 }) => {
  return (
    <LinkLogo href={href} width={width} height={height}>
      <Text>{text}</Text>
    </LinkLogo>
  );
};
