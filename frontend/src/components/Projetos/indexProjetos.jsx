import Menu from "../MenuLateral/menuLateral";
import {App} from "../Home/indexHome";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile";
import {DivIconeBotaoOpen, IconeBotaoMenuPrincipalOpen } from "../Home/indexHome.jsx";
import {styled} from "styled-components";
import ImagePortfolio from "../Projetos/Images/ImagePortFolio.png"
import { Link } from "react-router-dom";


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
    font-size: 1.5vw;

    @media(max-width: 768px){
        font-size: clamp(4.5vw, 5vw, 5.5vw);
    }

    @media(min-width: 768px) and (max-width: 1400px){
        font-size: 3vw;
    }
`;

const DivMainProjetos = styled.div`
    width: 60%;
    height: 90%;
    /* background-color: purple; */
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));

    @media(min-width: 769px) and (max-width: 1100px){
        overflow: auto;
    }

     @media(max-width: 768px){
        display: flex;
        width: 80%;
        flex-direction: column;
        overflow: auto;
        gap: 2rem;
    }


`;

const DivProjetos = styled.div`
    width: 100%;
    height: 30%;
    border-radius: 20px;
    border: 1px solid #FFF;

    @media(min-width: 768px) and (max-width: 1130px){
        height: 80%;
    }
`;

const DivInteriorProjeto = styled.div`
    width: 100%;
    height: 80%;
    border-radius: 20px 20px 0px 0px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextoInterior = styled.p`
    color: #FFF;
    font-size: 1vw;

    @media(max-width: 400px){
        font-size: clamp(3.5vw, 4vw, 4.5vw);
    }

    @media(min-width: 401px) and (max-width: 768px){
        font-size: clamp(3vw, 3.2vw, 3.5vw);
    }

    @media(min-width: 769px) and (max-width: 1200px){
        font-size: 2vw;
    }
`;

const DivInteriorProjetoTexto = styled.p`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #695cfe;
    border-radius: 0px 0px 20px 20px;
`;

const ImageProjeto = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0px 0px;

    @media(max-width: 768px){
        object-fit: cover; // Dimensiona a imagem
    }
`;

const LinkButton = styled(Link)``;



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

                    {/* Projeto 1 */}
                    <DivProjetos>
                        <DivInteriorProjeto>
                            <TextoInterior>Em desenvolvimento</TextoInterior>
                        </DivInteriorProjeto>
                        <DivInteriorProjetoTexto>
                            <TextoInterior>Software Automotivo - TCC</TextoInterior>    
                        </DivInteriorProjetoTexto>
                    </DivProjetos>

                    {/* Projeto 2 */}                    
                        <DivProjetos>
                            <LinkButton to={"/portfolio-web"}>
                                <DivInteriorProjeto>
                                    <ImageProjeto src={ImagePortfolio}/>
                                </DivInteriorProjeto>
                            </LinkButton>
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