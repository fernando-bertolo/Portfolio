import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { styled, css } from "styled-components";
import { device } from "../menuLateral.jsx";

const NavBarSuperior = styled.nav`
  @media (${device.tablet}) {
    width: 100vw;
    height: 10vh;
    background-color: #2f2841;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const DivMenuMobile = styled.div`
  height: 100vh;
  width: 40%;
  position: fixed;
  background-color: #201b2c;
  top: 0px;
  left: 0px;
  display: flex;
  border-radius: 0px 10px 10px;
  pointer-events: none;
  opacity: 0;

  ${({ OpenMenu }) =>
    OpenMenu &&
    css`
      pointer-events: auto;
      opacity: 1;
      animation: AnimatedOpenMenu 0.4s;

      @keyframes AnimatedOpenMenu {
        from {
          width: 0px;
          opacity: 0;
        }
        to {
          width: 40%;
          opacity: 1;
        }
      }
    `}

  > svg {
    color: #fff;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const DivListaOpcoes = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 4rem;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const DivBotoesListagem = styled.div`
  display: flex;
  height: 2rem;
  width: 80%;
  justify-content: center;
  align-items: center;
  background-color: #514869;
  border-radius: 10px;
`;

const LinkOpcoes = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const IconeMenuMobileOpen = styled(IoMdMenu)`
  display: none;

  @media (${device.tablet}) {
    display: flex;
    color: #fff;
    margin-left: 1rem;
    height: 2rem;
    width: 2rem;
    pointer-events: auto;
  }
`;

function MenuMobile({ OpenMenu, setOpenMenu }) {
  return (
    <>
      <NavBarSuperior>
        <IconeMenuMobileOpen onClick={() => setOpenMenu(true)} />
      </NavBarSuperior>
      <DivMenuMobile OpenMenu={OpenMenu}>
        <IoMdMenu onClick={() => setOpenMenu(false)} />
        <DivListaOpcoes>
          <DivBotoesListagem>
            <LinkOpcoes to={"/"}>Home</LinkOpcoes>
          </DivBotoesListagem>

          <DivBotoesListagem>
            <LinkOpcoes to={"/sobre-Mim"}>Sobre Mim</LinkOpcoes>
          </DivBotoesListagem>

          <DivBotoesListagem>
            <LinkOpcoes to={"/curriculo"}>Curriculo</LinkOpcoes>
          </DivBotoesListagem>

          <DivBotoesListagem>
            <LinkOpcoes to={"/certificados"}>Certificados</LinkOpcoes>
          </DivBotoesListagem>

          <DivBotoesListagem>
            <LinkOpcoes to={"/projetos"}>Projetos</LinkOpcoes>
          </DivBotoesListagem>

          <DivBotoesListagem>
            <LinkOpcoes to={"/contato"}>Contato</LinkOpcoes>
          </DivBotoesListagem>
        </DivListaOpcoes>
      </DivMenuMobile>
    </>
  );
}

export default MenuMobile;
