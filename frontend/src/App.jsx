import "./App.css"
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/indexHome.jsx";
import Sobre from ".//components/SobreMim/indexSobre.jsx";
import Curriculo from "./components/Curriculo/indexCurriculo.jsx";
import Certificados from "./components/Certificados/indexCertificados.jsx";
import Projetos from "./components/Projetos/indexProjetos.jsx";
import Contato from "./components/Contato/indexContato.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/sobre-mim" element={<Sobre/>}/>
      <Route path="/curriculo" element={<Curriculo/>}/>
      <Route path="/certificados" element={<Certificados/>}/>
      <Route path="/projetos" element={<Projetos/>}/>
      <Route path="/contato" element={<Contato/>}/>
    </Routes>
  );
}

export default App;
