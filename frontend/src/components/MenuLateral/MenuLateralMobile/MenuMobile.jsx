import {IoMdMenu} from "react-icons/io";
import { Link } from "react-router-dom";
import {styled, css} from "styled-components";

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



const DivMenuMobile = styled.div`
    height: 100vh;
    width: 40%;
    position: fixed;
    background-color: #201B2C;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: flex-end;
    border-radius: 0px 10px 10px;
    pointer-events: none;
    opacity: 0;

    ${({OpenMenu}) => OpenMenu && css`
        opacity: 1;
        background-color: #201B2C;
        pointer-events: auto;
    `}
    > svg{
        color: #FFF;
        width: 2rem;
        height: 2rem;
        position: absolute; 
        top: 1rem;
        right: 1rem;
    } 
`;

const IconeMenuMobile = styled(IoMdMenu)`
  display: none;

  @media (${device.tablet}){
    display: flex;
    color: #FFF;
    height: 2rem;
    width: 2rem;
    pointer-events: auto;
  }
`;

const DivListaOpcoes = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 4rem;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const DivBotoesListagem = styled.div`
  display: flex;
  height: 2rem;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: #514869;
  border-radius: 10px;

`;

const LinkOpcoes = styled(Link)`
  text-decoration: none;
  color: #FFF;
`;



function MenuMobile({OpenMenu, setOpenMenu }){

    return(
        <>
            <IconeMenuMobile onClick={() => setOpenMenu(true)}/>
            <DivMenuMobile OpenMenu={OpenMenu}>
                <IoMdMenu onClick={() => setOpenMenu(false)}/>
                <DivListaOpcoes>
                  <DivBotoesListagem>
                    <LinkOpcoes to={"/"}>Home</LinkOpcoes>
                  </DivBotoesListagem>

                  <DivBotoesListagem>
                    <LinkOpcoes to={"/sobre-Mim"}>Sobre Mim</LinkOpcoes>
                  </DivBotoesListagem>

                  <DivBotoesListagem>
                    <LinkOpcoes to={"/curriculo"}>Curriculo</LinkOpcoes>
                  </DivBotoesListagem>

                  <DivBotoesListagem>
                    <LinkOpcoes to={"/certificados"}>Certificados</LinkOpcoes>
                  </DivBotoesListagem>

                  <DivBotoesListagem>
                    <LinkOpcoes to={"/projetos"}>Projetos</LinkOpcoes>
                  </DivBotoesListagem>

                  <DivBotoesListagem>
                    <LinkOpcoes to={"/contato"}>Contato</LinkOpcoes>
                  </DivBotoesListagem>
                </DivListaOpcoes>    
            </DivMenuMobile>  

        </>
           
    );
}

export default MenuMobile;