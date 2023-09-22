import Menu from "../MenuLateral/menuLateral.jsx";
import {styled} from "styled-components";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx"; 


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

function Home() {

  const [OpenMenu, setOpenMenu] = useState(true);

  return (
      <App>
        <Menu setOpenMenu={setOpenMenu}/>
        <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
        <h1>Home</h1>
      </App>
  );
}

export default Home;
