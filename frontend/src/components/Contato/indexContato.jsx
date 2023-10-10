import Menu from "../MenuLateral/menuLateral.jsx";
import {App} from "../Home/indexHome.jsx";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx";
import {DivIconeBotaoOpen, IconeBotaoMenuPrincipalOpen } from "../Home/indexHome.jsx";
import styled from "styled-components";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {BsTelephone} from "react-icons/bs";
import {FiMapPin} from "react-icons/fi";


const DivTelaMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(17, 14, 27);
    display: flex;
    flex-direction: column;
`;

const HeaderTitulo = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
`;

const Titulo = styled.p`
    color: #FFF;
    font-size: 1.5vw;

    @media(max-width: 768px){
        font-size:  clamp(4vw, 5vw, 5.5vw);
    }
    @media(min-width: 768px) and (max-width: 1400px){
        font-size: 3vw;
    }
`;

const SectionConteudo = styled.section`
    width: 100%;
    height: 30%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
`;

const DivContato = styled.div`
    width: 30%;
    height: 100%;
    border-radius: 20px;
    border: 1px solid #FFF;
    background-color: rgba(51, 41, 79, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    gap: 1rem;
    align-items: center;

    @media(max-width: 768px){ 
        width: 60%;
    }

    @media(min-width: 769px) and (max-width: 1200px){ 
        width: 50%;
    }
`;

const Descricao = styled.p`
    color: #FFF;
    font-size: 1vw;

    @media(max-width: 768px){
        font-size: clamp(2.5vw, 3vw, 3.5vw);
    }

    @media(min-width: 769px) and (max-width: 1200px){ 
        font-size: 2.5vw;
    }

`;

const DivConteudo = styled.div`
    width: 100%;
    height: 20%;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const DivIcone = styled.div`
    width: 10%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconeEmail = styled(HiOutlineEnvelope)`
  color: #fff;
  height: 2rem;
  width: 2rem;
`;

const IconeTelefone = styled(BsTelephone)`
  color: #fff;
  height: 2rem;
  width: 2rem;
`;

const IconeLocalizacao = styled(FiMapPin)`
    color: #FFF;
    height: 2rem;
    width: 2rem;
`;



function Contato() {

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
                <HeaderTitulo>
                    <Titulo>Contato</Titulo>
                </HeaderTitulo>
                <SectionConteudo>
                    <DivContato>
                        {/* E-mail */}
                        <DivConteudo>
                            <DivIcone>
                                <IconeEmail/>
                            </DivIcone>
                            <Descricao>
                                fernando.bertolo03@icloud.com
                            </Descricao>
                        </DivConteudo>

                        {/* Telefone */}
                        <DivConteudo>
                            <DivIcone>
                                <IconeTelefone/>
                            </DivIcone>
                            <Descricao>
                                (19) 9 9904-4410
                            </Descricao>
                        </DivConteudo>

                        {/* Localização */}

                        <DivConteudo>
                            <DivIcone>
                                <IconeLocalizacao/>
                            </DivIcone>
                            <Descricao>
                                Limeira - SP
                            </Descricao>
                        </DivConteudo>
                    </DivContato>

                </SectionConteudo>
            </DivTelaMain>
        </App>
    );
}

export default Contato;