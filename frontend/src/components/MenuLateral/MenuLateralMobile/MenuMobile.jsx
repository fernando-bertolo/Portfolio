import {IoMdMenu} from "react-icons/io";
import styled from "styled-components";


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


const IconeMenuMobile = styled(IoMdMenu)`
    display: none;

    @media (${device.tablet}){
        display: flex;
        color: #FFF;
        height: 2rem;
        width: 2rem;
        pointer-events: auto;
    }    
`

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
    left: ${props => props.MenuMobile ? "0" : "-100"};
    animation: visualizarMenuMobile .4s;

    @keyframes visualizarMenuMobile {
        from {
            opacity: 0;
            width: 0px;
        }
        to {
            opacity: 1;
            width: 300px;
        }
        
    }
`;



function MenuMobile({active, setActive}){
    const closeMenu = () => {
        setActive(false);
      }
    console.log(closeMenu);
    return(
            <DivMenuMobile MenuMobile={active}>
                <IconeMenuMobile onClick={closeMenu}/>           
            </DivMenuMobile>             
    );
}

export default MenuMobile;