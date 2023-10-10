import {App} from "../../Home/indexHome.jsx";
import Menu from "../../MenuLateral/menuLateral.jsx"
import MenuMobile from "../../MenuLateral/MenuLateralMobile/MenuMobile.jsx";
import { useState } from "react";
import {
    DivIconeBotaoOpen,
    IconeBotaoMenuPrincipalOpen,
  } from "../../Home/indexHome.jsx";
import styled from "styled-components";
import {BiLogoCss3, BiLogoReact, BiLogoNodejs} from "react-icons/bi";
import ImagemRectRouter from "../Images/react-router.svg";
import ImagemStyledComponents from "../Images/styled-components.svg";
import ImagemMYSQL from "../Images/mysql.svg"




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
    /* background-color: red; */
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
    width: 80%;
    height: 90%;
    /* background-color: purple; */
    display: flex;
    flex-direction: column;

    @media(max-width: 768px){
        width: 80%;
        flex-direction: column;
    }
`;

const DivProjeto = styled.div`
    width: 100%;
    height: 30%;
    /* background-color: blue; */
    display: flex;
    @media(max-width: 1200px){
       flex-direction: column;
    }

`;

const DivInteriorImagem = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: green; */
    border-radius: 20px;
    border: 1px solid #FFF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1200px){
        width: 100%;
        height: 60%;
    }
`;

const TextoInterior = styled.p`
    color: #FFF;
    font-size: 1.2vw;

    @media(max-width: 1200px){
        font-size: clamp(1.8vw, 2vw, 2.4vw);
    }
`;



const DivInteriorDescricao = styled.div`
    width: 70%;
    height: 100%;
    padding-left: 1rem;
    /* background-color: gray; */

    @media(max-width: 1200px){
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


const Descricao = styled.p`
    color: #FFF;
    font-size: 1.2vw;

    @media(max-width: 1200px){
        font-size: clamp(1.8vw, 2vw, 2.4vw);
    }
`;

const SectionTecnologias = styled.section`
    width: 100%;
    height: 30%;
    /* background-color: orange; */
`;

const DivTituloTecnologias = styled.p`
    width: 100%;
    height: 30%;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TituloTecnologia = styled.p`
    color: #FFF;
    font-size: 1.5vw;

    @media(min-width: 769px) and (max-width: 1200px){
        font-size: clamp(2.3vw, 2.5vw, 2.8vw)
    }

    @media(max-width: 768px){
        font-size: clamp(3.5vw, 4vw, 4.2vw)
    }
`;

const DivMainIcones = styled.div`
    width: 100%;
    height: 70%;
    /* background-color: gold; */
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    @media(max-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;        
    }
`;

const DivIconesHabilidades = styled.div`
  width: 15%;
  height: 50%;
  background-color: #d9d9d9;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(0.9);
    box-shadow: 0px 0px 5px #fff;
  }
`;

const DivIconesDentro = styled.div`
  width: 60%;
  height: 60%;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivParagrafoDescricao = styled.p`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  /* background-color: pink; */
`;

const ParagrafoDescricaoSkill = styled.p`
  color: black;
  font-size: 1vw;

  @media (max-width: 500px) {
    font-size: clamp(2.5vw, 3vw, 4vw);
  }

  @media (min-width: 500px) and (max-width: 768px) {
    font-size: clamp(1.8vw, 2.3vw, 2.8vw);
  }
`;


const IconeCSS = styled(BiLogoCss3)`
  color: #0000ff;
  width: 6vw;
  height: 6vh;

  @media (max-width: 500px) {
    width: 10vw;
    height: 9vw;
  }

`;


const IconeReact = styled(BiLogoReact)`
  color: #28bab1;
  width: 6vw;
  height: 6vh;

  @media (max-width: 500px) {
    width: 10vw;
    height: 9vw;
  }
`;

const ReactRouter = styled.img`
    width: 3vw;
    height: 3vw;

    @media (max-width: 500px) {
    width: 10vw;
    height: 10vw;
  }

  @media (min-width: 501px) and (max-width: 768px) {
    width: 6vw;
    height: 6vw;
  }
`;

const StyledComponents = styled.img`
    width: 3vw;
    height: 3vw;

    @media (max-width: 500px) {
    width: 10vw;
    height: 9vw;
    }
    
    @media (min-width: 501px) and (max-width: 768px) {
    width: 6vw;
    height: 6vw;
  }
`;

const MYSQL = styled.img`
    width: 5vw;
    height: 3vw;

    @media (max-width: 500px) {
    width: 10vw;
    height: 10vw;
    }

    @media (min-width: 501px) and (max-width: 768px) {
        width: 10vw;
        height: 6vw;
    }
`;

const IconeNodeJS = styled(BiLogoNodejs)`
  color: #44883e;
  width: 6vw;
  height: 6vh;

  @media (max-width: 500px) {
    width: 10vw;
    height: 9vw;
  }
`;

const DivRepositorioGit = styled.div`
    width: 100%;
    height: 30%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const DivBotaoGitHub = styled.div`
    width: 10%;
    height: 20%;
    border-radius: 20px;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px){
        width: 30%;
        height: 20%;
    }

    @media(min-width: 769px) and (max-width: 1200px){
        width: 20%;
    }
`;


const GitHubPortfolio = styled.a`
    font-size: 1vw;
    color: black;
    text-decoration: none;

    @media(max-width: 768px){
        font-size: clamp(2.5vw, 3vw, 3.5vw);
    }
    @media(min-width: 769px) and (max-width: 1200px){
        font-size: clamp(1.5vw, 1.8vw, 2.3vw);
    }
`;


function ProjetoTCC(){

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
                    <Titulo>Software Automotivo - TCC</Titulo>
                </DivTitulo>

                {/* Seção Principal */}
                <SectionConteudo>
                    <DivProjeto>
                        <DivInteriorImagem>
                            <TextoInterior>Em desenvolvimento</TextoInterior>
                        </DivInteriorImagem>
                        <DivInteriorDescricao>
                            <Descricao>
                            Este projeto será o trabalho de conclusão de curso da uma minha gradução na Faculdade Integrada Einstein de Limeira - FIEL, 
                            onde estou tendo a oportunidade de aprofundar meus conhecimentos em ReactJS com estilização CSS no Frontend, 
                            e no BackEnd, NodeJS com a biblioteca Express.
                            </Descricao>
                        </DivInteriorDescricao>    
                    </DivProjeto>

                    {/* Section Tecnologias */}
                    <SectionTecnologias>
                        <DivTituloTecnologias>
                            <TituloTecnologia>Tecnologias Utilizadas</TituloTecnologia>
                        </DivTituloTecnologias>

                        {/* Div Principal dos Icones */}
                        <DivMainIcones>
                            
                            {/* Div Habilidade 1 */}

                            <DivIconesHabilidades>
                                <DivIconesDentro>
                                    <IconeCSS />
                                </DivIconesDentro>
                                <DivParagrafoDescricao>
                                    <ParagrafoDescricaoSkill>CSS</ParagrafoDescricaoSkill>
                                </DivParagrafoDescricao>
                            </DivIconesHabilidades>

                            {/* Div Habilidade 2 */}

                            <DivIconesHabilidades>
                                <DivIconesDentro>
                                    <StyledComponents src={ImagemStyledComponents}/>
                                </DivIconesDentro>
                                <DivParagrafoDescricao>
                                    <ParagrafoDescricaoSkill>Styled Components</ParagrafoDescricaoSkill>
                                </DivParagrafoDescricao>
                            </DivIconesHabilidades>

                            {/* Div Habilidade 3 */}

                            <DivIconesHabilidades>
                                <DivIconesDentro>
                                    <IconeReact />
                                </DivIconesDentro>
                                <DivParagrafoDescricao>
                                    <ParagrafoDescricaoSkill>ReactJS</ParagrafoDescricaoSkill>
                                </DivParagrafoDescricao>
                            </DivIconesHabilidades>

                            {/* Div Habilidade 4 */}

                            <DivIconesHabilidades>
                                <DivIconesDentro>
                                    <ReactRouter src={ImagemRectRouter}/>
                                </DivIconesDentro>
                                <DivParagrafoDescricao>
                                    <ParagrafoDescricaoSkill>React Router</ParagrafoDescricaoSkill>
                                </DivParagrafoDescricao>
                            </DivIconesHabilidades>

                            {/* Div Habilidade 5 */}
                            <DivIconesHabilidades>
                                <DivIconesDentro>
                                    <IconeNodeJS/>
                                </DivIconesDentro>
                                <DivParagrafoDescricao>
                                    <ParagrafoDescricaoSkill>NodeJS</ParagrafoDescricaoSkill>
                                </DivParagrafoDescricao>
                            </DivIconesHabilidades>
                            
                            {/* Div Habilidade 6 */}

                            <DivIconesHabilidades>
                                <DivIconesDentro>
                                    <MYSQL src={ImagemMYSQL}/>
                                </DivIconesDentro>
                                <DivParagrafoDescricao>
                                    <ParagrafoDescricaoSkill>MySQL</ParagrafoDescricaoSkill>
                                </DivParagrafoDescricao>
                            </DivIconesHabilidades>

                        </DivMainIcones>
                    </SectionTecnologias>

                   

                    <DivRepositorioGit>
                        
                        <DivBotaoGitHub>
                            <GitHubPortfolio href="https://github.com/fernando-bertolo/NodeJS" target="_blank">GitHub</GitHubPortfolio>
                        </DivBotaoGitHub>
                    </DivRepositorioGit>
                </SectionConteudo>
            </DivTelaMain>

        </App>
    );
}

export default ProjetoTCC;