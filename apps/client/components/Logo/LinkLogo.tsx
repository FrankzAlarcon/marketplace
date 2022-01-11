import { Anchor } from '../List/Anchor';
import { Logo } from './Logo';

export const LinkLogo = ({ href, width, height, children }) => (
  <>
    <Anchor href={href}>
      <Logo>{children}</Logo>
    </Anchor>
  </>
);
