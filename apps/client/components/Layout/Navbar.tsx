import { Colors } from '@components/Colors';
import styled from 'styled-components';
import { UL } from '@components/List/UL';
import { LI } from '@components/List/LI';
import { Anchor } from '@components/List/Anchor';
import { TextLinkLogo } from '@components/Logo/TextLinkLogo';
import {BsCart2} from "react-icons"

const MyNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  padding: 0 24px;

  border-bottom: 1px solid var(--very-light-pink);
  background-color: ${Colors.primary};
  color: ${Colors.white};
`;

const LeftNavbar = styled.div``;

export const Navbar = () => {
  return (
    <>
      <header>
        <MyNavbar>
          <TextLinkLogo
            href="#home"
            text="Club de Software EPN"
            height={30}
            width={30}
          />
          <div>
            <UL>
              <LI>
                <Anchor href="#home">Inicio</Anchor>
              </LI>
              <LI>
                <Anchor href="#courses">Cursos</Anchor>
              </LI>
              <LI>
                <Anchor href="#contact">Contacto</Anchor>
              </LI>
            </UL>
          </div>

          <div></div>
        </MyNavbar>
      </header>
    </>
  );
};
