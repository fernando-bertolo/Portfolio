import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/indexHome.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/Sobre-Mim"/>
      <Route path="/curriculo"/>
      <Route path="/certificados"/>
      <Route path="/projetos"/>
      <Route path="/contato"/>
    </Routes>
  );
}

export default App;
