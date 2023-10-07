import Menu from "../MenuLateral/menuLateral";
import {App} from "../Home/indexHome";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile";
import {DivIconeBotaoOpen, IconeBotaoMenuPrincipalOpen } from "../Home/indexHome.jsx";
import {styled} from "styled-components";
import ImagePortfolio from "../Projetos/Images/ImagePortFolio.png"


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
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextoTitulo = styled.p`
    color: #FFF;
    font-size: 2vw;
`;

const DivMainProjetos = styled.div`
    width: 60%;
    height: 90%;
    /* background-color: purple; */
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    @media(min-width: 769px) and (max-width: 1100px){
        overflow: auto;
    }

     @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        overflow: auto;
    }


`;

const DivProjetos = styled.div`
    width: 100%;
    height: 30%;
    border-radius: 20px;
    background-color: gray;

    @media(min-width: 768px) and (max-width: 1130px){
        height: 100%;
    }
`;

const DivInteriorProjeto = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 20px 20px 0px 0px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextoInterior = styled.p`
    color: #FFF;
    font-size: 1vw;
`;

const DivInteriorProjetoTexto = styled.p`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    /* background-color: blue; */
    border-radius: 0px 0px 20px 20px;
`;

const ImageProjeto = styled.img`
    width: 100vw;
    height: 8rem;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
`;



function Projetos() {

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

            {/* Conteúdo */}
            <DivTelaMain>
                <DivTitulo>
                    <TextoTitulo>Projetos</TextoTitulo>
                </DivTitulo>

                <DivMainProjetos>
                    <DivProjetos>
                        <DivInteriorProjeto>
                            <TextoInterior>Em desenvolvimento</TextoInterior>
                        </DivInteriorProjeto>
                        <DivInteriorProjetoTexto>
                            <TextoInterior>Software Automotivo - TCC</TextoInterior>    
                        </DivInteriorProjetoTexto>
                    </DivProjetos>
                    <DivProjetos>
                        <DivInteriorProjeto>
                            <ImageProjeto src={ImagePortfolio}/>
                        </DivInteriorProjeto>
                        <DivInteriorProjetoTexto>
                            <TextoInterior>PortFolio Web</TextoInterior>    
                        </DivInteriorProjetoTexto>
                    </DivProjetos>
                </DivMainProjetos>
            </DivTelaMain>
            
        </App>
    );
}

export default Projetos;