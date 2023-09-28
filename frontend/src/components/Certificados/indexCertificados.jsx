import Menu from "../MenuLateral/menuLateral.jsx";
import {App} from "../Home/indexHome.jsx";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx";
import {DivIconeBotaoOpen, IconeBotaoMenuPrincipalOpen } from "../Home/indexHome.jsx";

function Certificados() {

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
            <h1>Certificados</h1>
        </App>
    );
}

export default Certificados;