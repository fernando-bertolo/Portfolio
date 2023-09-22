import Menu from "../MenuLateral/menuLateral.jsx";
import {App} from "../Home/indexHome.jsx";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx";


function Contato() {

    const [OpenMenu, setOpenMenu] = useState(false);

    return(
        <App>
            <Menu/>
            <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
            <h1>Contato</h1>
        </App>
    );
}

export default Contato;