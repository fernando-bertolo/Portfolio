import Menu from "../menuLateral.jsx";
import {device} from "../menuLateral.jsx";
import {IoMdMenu} from "react-icons/io";
import styled from "styled-components";


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

function MenuMobile({active}){

    const closeMenu = () => {
        active(false);
      }
    console.log(closeMenu);

    return(
        <Menu MenuMobile={active}>
            <IconeMenuMobile onClick={closeMenu}/>            
        </Menu>

    );
}

export default MenuMobile;