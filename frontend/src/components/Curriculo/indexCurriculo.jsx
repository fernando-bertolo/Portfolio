import Menu from "../MenuLateral/menuLateral.jsx";
import {App} from "../Home/indexHome.jsx";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx";

function Curriculo() {

    const [OpenMenu, setOpenMenu] = useState(false);

    return(
        <App>
            <Menu/>
            <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
            <h1>Curriculo</h1>
        </App>
    );
}

export default Curriculo;