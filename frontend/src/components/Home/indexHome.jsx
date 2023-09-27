import Menu from "../MenuLateral/menuLateral.jsx";
import { styled, css} from "styled-components";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx";
import { BiLogoReact } from "react-icons/bi";
import { device } from "../MenuLateral/menuLateral.jsx";
import { IoIosArrowForward } from "react-icons/io";

export const App = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #e4e9f7;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #e4e9f7;
  }
`;

const DivTelaMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(17, 14, 27);
  /* background-color: rgba(51, 41, 79, 0.9); */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (${device.tablet}) {
    flex-direction: column;
  }
`;

const DivApresentacao = styled.div`
  width: 30vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: calc();
  padding-left: 2rem;

  @media (${device.tablet}) {
    width: 100vw;
  }
`;

const TextoApresentacao1 = styled.p`
  color: #fff;
  font-size: clamp(1vw, 1.5vw, 3vw);
  
  @media (${device.tablet}) {
    font-size: clamp(4vw, 6vw, 8vw);
  }
`;
const TextoApresentacao2 = styled.p`
  color: #fff;
  font-size: clamp(1vw, 3vw, 6vw);

  @media(${device.tablet}){
    font-size: clamp(8vw, 10vw, 12vw);
  }

`;
const TextoApresentacao3 = styled.p`
  color: #fff;
  font-size: clamp(1vw, 1.5vw, 3vw);

  @media (${device.tablet}) {
    font-size: clamp(4vw, 6vw, 8vw);
  }
`;

const DivIconeReact = styled.div`
  width: 30vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${device.tablet}) {
    display: none;
  }
`;

const LogoReact = styled(BiLogoReact)`
  width: clamp(10rem, 20rem, 30rem);
  height: clamp(10rem, 20rem, 30rem);
  color: #28bab1;

  @media (${device.tablet}) {
    display: none;
  }
`;

const IconeBotaoMenuPrincipalOpen = styled(IoIosArrowForward)`
  color: #fff;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  left: 0;

  @media (${device.tablet}) {
    display: none;
  }

  ${({OpenMenuMain}) => OpenMenuMain === false && css`
    display: none;
  `}
`;


const DivIconeBotaoOpen = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function Home() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [OpenMenuMain, setOpenMenuMain] = useState(false);

  return (
    <App>
      <Menu OpenMenuMain={OpenMenuMain} setOpenMenuMain={setOpenMenuMain} />
      <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
      <DivIconeBotaoOpen>
        <IconeBotaoMenuPrincipalOpen onClick={() => setOpenMenuMain(false)} OpenMenuMain={OpenMenuMain}/>
      </DivIconeBotaoOpen>
      <DivTelaMain>
        
        <DivApresentacao>
          <TextoApresentacao1>Olá, sou</TextoApresentacao1>
          <TextoApresentacao2>Fernando Bertolo.</TextoApresentacao2>
          <TextoApresentacao3>Desenvolvedor FullStack</TextoApresentacao3>
        </DivApresentacao>
        <DivIconeReact>
          <LogoReact/>
        </DivIconeReact>
      </DivTelaMain>
    </App>
  );
}

export default Home;
