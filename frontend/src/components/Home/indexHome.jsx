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

const Body = styled.body`
  margin: 0px;
  padding: 0px;
  margin-top: 0px;
  font-family: 'Calibri', sans-serif;
`

function Home() {
  return (
    <Body>
      <App>
        <Menu/>
        <h1>Home</h1>
      </App>
    </Body>
  );
}

export default Home;
