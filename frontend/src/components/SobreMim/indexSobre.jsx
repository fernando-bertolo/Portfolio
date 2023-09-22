import Menu from "../MenuLateral/menuLateral.jsx";
import {App} from "../Home/indexHome.jsx";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx"; 
import { useState } from "react";

function Sobre() {

    const [OpenMenu, setOpenMenu] = useState(false);
    return(
        <App>
            <Menu/>
            <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
            <h1>Sobre Mim</h1>
        </App>
    );
}

export default Sobre;