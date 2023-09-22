import Menu from "../MenuLateral/menuLateral";
import {App} from "../Home/indexHome";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile";

function Projetos() {

    const [OpenMenu, setOpenMenu] = useState(false);

    return(
        <App>
            <Menu setOpenMenu={setOpenMenu}/>
            <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
            <h1>Projetos</h1>
        </App>
    );
}

export default Projetos;