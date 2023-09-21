import Menu from "../MenuLateral/menuLateral.jsx";
import {styled} from "styled-components";


export const App = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #E4E9F7;

  @media(max-width: 768px){
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #E4E9F7;
  }
`

function Home() {
  return (
      <App>
        <Menu/>
        <h1>Home</h1>
      </App>
  );
}

export default Home;
