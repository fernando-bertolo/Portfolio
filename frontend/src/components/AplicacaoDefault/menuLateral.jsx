import "./menuLateral.css";
import { Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {FaRegAddressCard} from "react-icons/fa";
import {BiMedal} from "react-icons/bi";
import {LuCoffee} from "react-icons/lu";
import {HiOutlineEnvelope} from "react-icons/hi2";
import {AiOutlineLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";

function Menu() {
    return(
      <nav className="menu">
        <div className="div-nome-lateral">
          <p>
            Fernando Bertolo
          </p>
        </div>
  
        <div className="menu-opcoes">
          <div>
            <AiOutlineHome className="icones-menu"/>
            <Link className="menu-link" to={"/"}>Home</Link>
          </div>
          <div>
            <BiUserCircle className="icones-menu"/>
            <Link className="menu-link" to={"/sobre-Mim"}>Sobre Mim</Link>
          </div>
  
          <div>
            <FaRegAddressCard className="icones-menu"/>
            <Link className="menu-link" to={"/curriculo"}>Curriculo</Link>
          </div>
  
          <div>
            <BiMedal className="icones-menu"/>
            <Link className="menu-link" to={"/certificados"}>Certificados</Link>
          </div>
          
          <div>
            <LuCoffee className="icones-menu"/>
            <Link className="menu-link" to={"/projetos"}>Projetos</Link>
          </div>
          
          <div>
            <HiOutlineEnvelope className="icones-menu"/>
            <Link className="menu-link" to={"/contato"}>Contato</Link>
          </div>
        </div>

        <div className="div-menu-end">
          <div className="div-redes-sociais">
            <a href="https://www.linkedin.com/in/fernandobertolojr/" target="_blank" rel="noopener"><AiOutlineLinkedin className="icones-redes-sociais"/></a>
            <a href="https://github.com/fernando-bertolo" target="_blank" rel="noopener"><FaGithubSquare className="icones-redes-sociais"/></a>
            <a href="https://instagram.com/bertol0" target="_blank" rel="noopener"><AiOutlineInstagram className="icones-redes-sociais"/></a>
          </div>
          <div className="div-copy">
            <p>@ 2023 Bertolo</p>
          </div>
        </div>
      </nav>
    );
  }


export default Menu;