import { Link } from "react-router-dom";
import "./indexHome.css";
import "./menuLateral.css";
import {AiOutlineHome} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {FaRegAddressCard} from "react-icons/fa";
import {BiMedal} from "react-icons/bi";
import {LuCoffee} from "react-icons/lu";
import {HiOutlineEnvelope} from "react-icons/hi2";


function Menu() {
  return(
    <nav className="menu">
      <div className="info">
        <p>Fernando Bertolo</p>
      </div>

      <div className="menu-opcoes">
        <div className="div-home">
          <AiOutlineHome className="icone-home"/>
          <Link className="menu-link">Home</Link>
        </div>
        <BiUserCircle className="icone-user"/>
        <Link className="menu-link">Sobre Mim</Link>
        <FaRegAddressCard className="icone-curriculo"/>
        <Link className="menu-link">Curriculo</Link>
        <BiMedal className="icone-certificados"/>
        <Link className="menu-link">Certificados</Link>
        <LuCoffee className="icone-projetos"/>
        <Link className="menu-link">Projetos</Link>
        <HiOutlineEnvelope className="icone-contato"/>
        <Link className="menu-link">Contato</Link>
      </div>
    </nav>

  );
}

function Home() {
  return (
    <div className="App">
      <Menu/>
    </div>
  );
}

export default Home;
