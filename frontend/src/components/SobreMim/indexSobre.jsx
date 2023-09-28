import Menu from "../MenuLateral/menuLateral.jsx";
import {App} from "../Home/indexHome.jsx";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx"; 
import { useState} from "react";
import { styled} from "styled-components";
import {DivIconeBotaoOpen, IconeBotaoMenuPrincipalOpen } from "../Home/indexHome.jsx";
import {device} from "../MenuLateral/menuLateral.jsx";

const DivTelaMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(17, 14, 27);
  /* background-color: rgba(51, 41, 79, 0.9); */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${device.tablet}) {
    flex-direction: column;
  }
`;

const DivConteudo = styled.div`
    width: 40vw;
    height: 60vh;
    flex-direction: column;
    background-color: rgba(51, 41, 79, 0.9);
    box-shadow: -5px 5px 30px #FFF;
    border-radius: 10px;

    @media(${device.tablet}){
        width: 80vw;
        height: 80vw;
    }
`;

const DivTextoSobre = styled.div`
    width: 100%;
    height: 10%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TextoSobre = styled.p`
    color: #FFF;
    font-size: clamp(1vw, 1.4vw, 2vw);
    @media(${device.tablet}){
        font-size: clamp(2vw, 3vw, 4vw);
        
    }
`;

const DivTextoCidade = styled.div`
    width: 100%;
    height: 10%;
    /* background-color: blue; */
    display: flex;
    align-items: center;
`;

const TextoCidade = styled.p`
    color: #FFF;
    font-size: clamp(0.8vw, 1vw, 1.2vw);
    margin-left: 1rem;
    @media(${device.tablet}){
        font-size: clamp(2vw, 3vw, 4vw); 
    }
`;

const DivTextoMain = styled.div`
    width: 100%;
    height: 80%;
    /* background-color: green; */
    border-radius: 0px 0px 10px 10px;
`;

const TextoMain = styled.p`
    color: #FFF;
    text-align: start;
    margin-left: 1rem;
    padding-top: 2rem;
    line-height: 2rem;
    font-size: clamp(1vw, 1.1vw, 1.2vw);
    @media(${device.tablet}){
        font-size: clamp(2vw, 3vw, 4vw); 
        line-height: normal;
    }
`;

function Sobre() {

    const [OpenMenu, setOpenMenu] = useState(false);
    const [OpenMenuMain, setOpenMenuMain] = useState(false);
    return(
        <App>
            <Menu OpenMenuMain={OpenMenuMain} setOpenMenuMain={setOpenMenuMain}/>
            <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>

            {/* Importando do indexHome.jsx */}
            <DivIconeBotaoOpen>
                <IconeBotaoMenuPrincipalOpen onClick={() => setOpenMenuMain(false)} OpenMenuMain={OpenMenuMain}/> 
            </DivIconeBotaoOpen>

            <DivTelaMain>
                <DivConteudo>
                    <DivTextoSobre>
                        <TextoSobre>SOBRE MIM</TextoSobre>
                    </DivTextoSobre>
                    <DivTextoCidade>
                        <TextoCidade>Limeira, São Paulo</TextoCidade>
                    </DivTextoCidade>
                    <DivTextoMain>
                        <TextoMain>
                        Olá, eu me chamo Fernando César Bertolo Júnior. Tenho 20 anos, sou analista de redes e de segurança e atualmente estou em transição de 
                        carreira, com o objetivo de conquistar uma oportunidade como desenvolvedor para me tornar um grande programador FullStack.
                        </TextoMain>
                        <TextoMain>
                        Conheci a área da tecnologia quando iniciei o ensino médio junto com o técnico em informática no colégio técnico de limeira (COTIL) 
                        e partir desta etapa me interessei pelo desenvolvimento de sistemas. Em 2022 iniciei o curso de Análise e Desenvolvimento de Sistemas 
                        na Faculade Integrada Einstein de Limeira - FIEL. 
                        </TextoMain>
                    </DivTextoMain>
                </DivConteudo>
            </DivTelaMain>
        </App>
    );
}

export default Sobre;