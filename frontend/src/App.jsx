import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/indexHome.jsx";
import Contato from "./components/Contato/indexContato.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/contato" element={<Contato/>}/>
    </Routes>
  );
}

export default App;
