import { Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {FaRegAddressCard} from "react-icons/fa";
import {BiMedal} from "react-icons/bi";
import {LuCoffee} from "react-icons/lu";
import {HiOutlineEnvelope} from "react-icons/hi2";
import {AiOutlineLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {styled} from "styled-components";




// Setando variaveis dos tamanhos dos dispositivos para responsividade
const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px"
}

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
}


//Estilização com styled-components

const NavMenuContainer = styled.nav`
  width: 10%;
  height: 100vh;
  background-color:#2F2841;

  @media (${device.tablet}){
    width: 100%;
    height: 10vh;
    box-shadow: 0 0 10px 2px;
  }
`; 

const DivNomeLateral = styled.div`
  color: white;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media(${device.tablet}){
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

  @media(${device.tablet}){
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
  }
`;

const DivBotoes = styled.div`

  width: 90%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 10px;

  &:hover{
    background-color: #695CFE;
    border: 1px solid #695CFE;
    border-radius: 10px;
    
    @media(${device.tablet}){
      display: none;
    }
  }

`;

const LinkButton = styled(Link)`
  color: #FFF;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(${device.tablet}){
    display: none;
  }
`;


//Icones Menu Lateral

const IconeHome = styled(AiOutlineHome)`
  color: #FFF;
  height: 2rem;
  width: 2rem;
`;

const IconeSobre = styled(BiUserCircle)`
  color: #FFF;
  height: 2rem;
  width: 2rem;
`;

const IconeCurriculo = styled(FaRegAddressCard)`
  color: #FFF;
  height: 2rem;
  width: 2rem;
`;

const IconeCertificados = styled(BiMedal)`
  color: #FFF;
  height: 2rem;
  width: 2rem;
`;

const IconeProjeto = styled(LuCoffee)`
  color: #FFF;
  height: 2rem;
  width: 2rem;
`;

const IconeContato = styled(HiOutlineEnvelope)`
  color: #FFF;
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

  @media(${device.laptop}){
    display: none;
  }
`;

const DivRedesSociais = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
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
`;

const ParagrafoCopy = styled.p`
  font-size: 0.9rem;
  color: gray;
`;

function Menu() {

    return(
      <NavMenuContainer>
        <DivNomeLateral>
          <p>
            Fernando Bertolo
          </p>
        </DivNomeLateral>

        <DivMenuOpcoes>
          <DivBotoes>
            <LinkButton to={"/"}><IconeHome/>Home</LinkButton>
          </DivBotoes>

          <DivBotoes>
            <LinkButton to={"/sobre-Mim"}><IconeSobre/>Sobre Mim</LinkButton>
          </DivBotoes>
  
          <DivBotoes>        
            <LinkButton to={"/curriculo"}><IconeCurriculo/>Curriculo</LinkButton>
          </DivBotoes>
  
          <DivBotoes>               
            <LinkButton to={"/certificados"}><IconeCertificados/>Certificados</LinkButton>
          </DivBotoes>
          
          <DivBotoes>
            <LinkButton to={"/projetos"}><IconeProjeto/>Projetos</LinkButton>
          </DivBotoes>
          
          <DivBotoes>
            <LinkButton to={"/contato"}><IconeContato/>Contato</LinkButton>
          </DivBotoes>
        </DivMenuOpcoes>

        <DivMenuEnd>
          <DivRedesSociais>
            <a href="https://www.linkedin.com/in/fernandobertolojr/" target="_blank"><IconeLinkedin/></a>
            <a href="https://github.com/fernando-bertolo" target="_blank"><IconeGitHub/></a>
            <a href="https://instagram.com/bertol0" target="_blank"><IconeInstagram/></a>
          </DivRedesSociais>
          <DivCopy>
            <ParagrafoCopy>@ 2023 Bertolo</ParagrafoCopy>
          </DivCopy>
        </DivMenuEnd>
      </NavMenuContainer>
    );
  }


  export default Menu;