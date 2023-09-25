import Menu from "../MenuLateral/menuLateral.jsx";
import {styled} from "styled-components";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx"; 
import {BiLogoReact} from "react-icons/bi";
import { device } from "../MenuLateral/menuLateral.jsx";


export const App = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #E4E9F7;

  @media(max-width: 768px){
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #E4E9F7;
  }
`


const DivTelaMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media(${device.tablet}){
    flex-direction: column;
  }
`;

const DivApresentacao = styled.div`
  width: 30vw;
  height: 50vh;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 2rem;

  @media(${device.tablet}){
    width: 100vw;
  }

`;

const TextoApresentacao1 = styled.p`
  color: #FFF;
  font-size: 2rem;
`;
const TextoApresentacao2 = styled.p`
  color: #FFF;
  font-size: 4rem;
`;
const TextoApresentacao3 = styled.p`
  color: #FFF;
  font-size: 2rem;
`;


const DivIconeReact = styled.div`
  width: 30vw;
  height: 50vh;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media(${device.tablet}){
    display: none;
  }

`;

const LogoReact = styled(BiLogoReact)`
  width: 20rem;
  height: 20rem;
  color: #07bc0c;


  @media(${device.tablet}){
    display: none;
  }
`;

function Home() {

  const [OpenMenu, setOpenMenu] = useState(false);
  const [OpenMenuMain, setOpenMenuMain] = useState(false);

  return (
      <App>
        <Menu setOpenMenu={setOpenMenu} OpenMenuMain={OpenMenuMain} setOpenMenuMain={setOpenMenuMain}/>
        <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
        
        <DivTelaMain>

          <DivApresentacao>
            <TextoApresentacao1>Ola, sou</TextoApresentacao1>
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
