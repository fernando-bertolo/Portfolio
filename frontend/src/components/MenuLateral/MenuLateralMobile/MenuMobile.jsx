import {IoMdMenu} from "react-icons/io";
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
    width: 300px;
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
        background-color: red;
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



function MenuMobile({OpenMenu, setOpenMenu }){

    return(
        <>
            <IconeMenuMobile onClick={() => setOpenMenu(true)}/>
            <DivMenuMobile OpenMenu={OpenMenu}>
                <IoMdMenu onClick={() => setOpenMenu(false)}/>           
            </DivMenuMobile>  

        </>
           
    );
}

export default MenuMobile;