import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { BiMedal } from "react-icons/bi";
import { LuCoffee } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { styled, css } from "styled-components";

// Setando variaveis dos tamanhos dos dispositivos para responsividade
const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

//Estilização com styled-components

const NavMenuContainer = styled.nav`
  width: 10vw;
  height: 100vh;
  background-color: #2f2841;
  opacity: 1;

  ${({ OpenMenuMain }) =>
    OpenMenuMain === true &&
    css`
      width: 0;
      animation: CloseMenu 0.4s;

      @keyframes CloseMenu {
        from {
          width: 10vw;
          opacity: 1;
          pointer-events: auto;
        }
        to {
          width: 0px;
          opacity: 0;
        }
      }
    `}

  @media(${device.tablet}) {
    display: none;
  }
`;

const DivNomeLateral = styled.div`
  color: white;
  width: 100%;
  height: 10%;
  display: flex;
  background-color: #695cfe;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 1;

  @media (${device.tablet}) {
    display: none;
  }
`;

const DivMenuOpcoes = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (${device.tablet}) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    display: none;
  }
`;

const DivBotoes = styled.div`
  width: 90%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 0rem 0.8rem;

  &:hover {
    background-color: #695cfe;
    border: 1px solid #695cfe;
    border-radius: 10px;

    @media (${device.tablet}) {
      display: none;
    }
  }
`;

const LinkButton = styled(Link)`
  color: #fff;
  font-size: clamp(0.9vw, 1.1vw, 1.5vw);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap; //Dimensiona os elementos em telas menores

  @media (${device.tablet}) {
    display: none;
  }
`;

//Icones Menu Lateral

const IconeHome = styled(AiOutlineHome)`
  color: #fff;
  height: 2rem;
  width: 2rem;
`;

const IconeSobre = styled(BiUserCircle)`
  color: #fff;
  height: 2rem;
  width: 2rem;
`;

const IconeCurriculo = styled(FaRegAddressCard)`
  color: #fff;
  height: 2rem;
  width: 2rem;
`;

const IconeCertificados = styled(BiMedal)`
  color: #fff;
  height: 2rem;
  width: 2rem;
`;

const IconeProjeto = styled(LuCoffee)`
  color: #fff;
  height: 2rem;
  width: 2rem;
`;

const IconeContato = styled(HiOutlineEnvelope)`
  color: #fff;
  height: 2rem;
  width: 2rem;
`;

//Div Final Menu Lateral

const DivMenuEnd = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${device.tablet}) {
    display: none;
  }
`;

const DivRedesSociais = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;

  @media(${device.laptop}){
    gap: 0.4rem;
  }
`;

//Icones Redes Socias Menu Lateral

const IconeLinkedin = styled(AiOutlineLinkedin)`
  color: gray;
  width: 1.3rem;
  height: 1.3rem;
`;

const IconeGitHub = styled(FaGithubSquare)`
  color: gray;
  width: 1.3rem;
  height: 1.3rem;
`;

const IconeInstagram = styled(AiOutlineInstagram)`
  color: gray;
  width: 1.3rem;
  height: 1.3rem;
`;

//Div Copy Final Menu Lateral
const DivCopy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({OpenMenuMain}) => OpenMenuMain === true && css` // consertando a quebra de pagina quando fecha o menu
    display: none;
  `}

`;

const ParagrafoCopy = styled.p`
  font-size: clamp(0.5vw, 1vw, 1.2vw);
  color: gray;

`;

const PrimeiroNome = styled.p`
  font-family: "Courier New", Courier, monospace;
`;

const SegundoNome = styled.p`
  font-family: "Courier New", Courier, monospace;
`;

const DivIconeBotaoMenuPrincipal = styled.div`
  height: 3%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (${device.tablet}) {
    display: none;
  }
`;
const IconeBotaoMenuPrincipalClose = styled(IoIosArrowBack)`
  color: #fff;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;

  @media (${device.tablet}) {
    display: none;
  }
`;


function Menu({ OpenMenuMain, setOpenMenuMain }) {
  return (
    <>
      <NavMenuContainer OpenMenuMain={OpenMenuMain}>
        <DivNomeLateral>
          <PrimeiroNome>Fernando</PrimeiroNome>
          <SegundoNome>Bertolo</SegundoNome>
        </DivNomeLateral>

        <DivIconeBotaoMenuPrincipal>
          <IconeBotaoMenuPrincipalClose onClick={() => setOpenMenuMain(true)} />
        </DivIconeBotaoMenuPrincipal>

        <DivMenuOpcoes>
          <DivBotoes>
            <LinkButton to={"/"}>
              <IconeHome />
              Home
            </LinkButton>
          </DivBotoes>

          <DivBotoes>
            <LinkButton to={"/sobre-mim"}>
              <IconeSobre />
              Sobre Mim
            </LinkButton>
          </DivBotoes>

          <DivBotoes>
            <LinkButton to={"/curriculo"}>
              <IconeCurriculo />
              Curriculo
            </LinkButton>
          </DivBotoes>

          <DivBotoes>
            <LinkButton to={"/certificados"}>
              <IconeCertificados />
              Certificados
            </LinkButton>
          </DivBotoes>

          <DivBotoes>
            <LinkButton to={"/projetos"}>
              <IconeProjeto />
              Projetos
            </LinkButton>
          </DivBotoes>

          <DivBotoes>
            <LinkButton to={"/contato"}>
              <IconeContato />
              Contato
            </LinkButton>
          </DivBotoes>
        </DivMenuOpcoes>

        <DivMenuEnd>
          <DivRedesSociais>
            <a
              href="https://www.linkedin.com/in/fernandobertolojr/"
              target="_blank"
            >
              <IconeLinkedin />
            </a>
            <a href="https://github.com/fernando-bertolo" target="_blank">
              <IconeGitHub />
            </a>
            <a href="https://instagram.com/bertol0" target="_blank">
              <IconeInstagram />
            </a>
          </DivRedesSociais>
          <DivCopy OpenMenuMain={OpenMenuMain}>
            <ParagrafoCopy>@ 2023 Bertolo</ParagrafoCopy>
          </DivCopy>
        </DivMenuEnd>
      </NavMenuContainer>
    </>
  );
}

export default Menu;
