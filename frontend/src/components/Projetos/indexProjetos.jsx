import Menu from "../MenuLateral/menuLateral";
import {App} from "../Home/indexHome";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile";
import {DivIconeBotaoOpen, IconeBotaoMenuPrincipalOpen } from "../Home/indexHome.jsx";

function Projetos() {

    const [OpenMenu, setOpenMenu] = useState(false);
    const [OpenMenuMain, setOpenMenuMain] = useState(false);

    return(
        <App>
            <Menu OpenMenuMain={OpenMenuMain} setOpenMenuMain={setOpenMenuMain}/>
            <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
            
            {/* Importando do indexHome.jsx */}
            <DivIconeBotaoOpen>
                <IconeBotaoMenuPrincipalOpen onClick={() => setOpenMenuMain(false)} OpenMenuMain={OpenMenuMain}/> 
            </DivIconeBotaoOpen>
            <h1>Projetos</h1>
        </App>
    );
}

export default Projetos;