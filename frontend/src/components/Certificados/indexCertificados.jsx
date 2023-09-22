import Menu from "../MenuLateral/menuLateral.jsx";
import {App} from "../Home/indexHome.jsx";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx";

function Certificados() {

    const [OpenMenu, setOpenMenu] = useState(false);
    
    return(
        <App>
            <Menu setOpenMenu={setOpenMenu}/>
            <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
            <h1>Certificados</h1>
        </App>
    );
}

export default Certificados;