import {App} from "../../Home/indexHome.jsx";
import Menu from "../../MenuLateral/menuLateral.jsx"
import MenuMobile from "../../MenuLateral/MenuLateralMobile/MenuMobile.jsx";
import { useState } from "react";
import {
    DivIconeBotaoOpen,
    IconeBotaoMenuPrincipalOpen,
  } from "../../Home/indexHome.jsx"
import styled from "styled-components";

import Imagem from "../Images/ImagePortFolio.png"



const DivTelaMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(17, 14, 27);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DivTitulo = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`;

const Titulo = styled.p`
    color: #FFF;
    font-size: 1.5vw;

    @media(min-width: 769px) and (max-width: 1200px){
        font-size: clamp(2.3vw, 2.5vw, 2.8vw)
    }

    @media(max-width: 768px){
        font-size: clamp(3.5vw, 4vw, 4.2vw)
    }
`;


const SectionConteudo = styled.section`
    width: 60%;
    height: 90%;
    background-color: purple;
    display: flex;

    @media(max-width: 768px){
        width: 80%;
        flex-direction: column;
    }
`;

const DivProjeto = styled.div`
    width: 100%;
    height: 30%;
    background-color: blue;
    display: flex;
    @media(max-width: 768px){
       flex-direction: column;
    }

`;

const DivInteriorImagem = styled.div`
    width: 40%;
    height: 100%;
    /* background-color: green; */
`;

const ImagemPortFolio = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;

const DivInteriorDescricao = styled.div`
    width: 60%;
    height: 100%;
    background-color: gray;
`;

const Descricao = styled.p`
    color: #FFF;
    font-size: 1vw;
`;

function ProjetoPortFolio(){

    const [OpenMenu, setOpenMenu] = useState(false);
    const [OpenMenuMain, setOpenMenuMain] = useState(false);
    return(
        <App>
            <Menu OpenMenuMain={OpenMenuMain} setOpenMenuMain={setOpenMenuMain} />
            <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
            <DivIconeBotaoOpen>
                <IconeBotaoMenuPrincipalOpen
                onClick={() => setOpenMenuMain(false)}
                OpenMenuMain={OpenMenuMain}
                />
            </DivIconeBotaoOpen>

            {/* Conteúdo */}
            <DivTelaMain>
                <DivTitulo>
                    <Titulo>PortFolio Web</Titulo>
                </DivTitulo>

                <SectionConteudo>
                    <DivProjeto>
                        <DivInteriorImagem>
                            <ImagemPortFolio src={Imagem}/>
                        </DivInteriorImagem>
                        <DivInteriorDescricao>
                            <Descricao>Este foi meu primeiro projeto, onde tive a oportunidade de aplicar os conhecimentos que adquiri em meus estudos sobre ReactJS e estilização de CSS.</Descricao>
                        </DivInteriorDescricao>    
                    </DivProjeto>
                </SectionConteudo>

            </DivTelaMain>

        </App>
    );
}

export default ProjetoPortFolio;