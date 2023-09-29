import Menu from "../MenuLateral/menuLateral.jsx";
import { App } from "../Home/indexHome.jsx";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx";
import {
  DivIconeBotaoOpen,
  IconeBotaoMenuPrincipalOpen,
} from "../Home/indexHome.jsx";
import styled from "styled-components";
import { device } from "../MenuLateral/menuLateral.jsx";
import { BsFillCircleFill } from "react-icons/bs";

const DivTelaMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(17, 14, 27);
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

const DivTextoCurriculo = styled.div`
  width: 100%;
  height: 10%;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextoCurriculo = styled.p`
  color: #fff;
  font-size: 2vw;
  @media (${device.laptop}) {
    font-size: 3vw;
  }
`;

const DivExperienciaProfissional = styled.div`
  width: 60%;
  height: 50%;
  background-color: pink;
  display: flex;
`;

const DivIcones = styled.div`
  width: 5%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DivLinha = styled.div`
  border-left: 2px solid #fff;
  height: 7%;
`;

const IconeCirculo = styled(BsFillCircleFill)`
  width: 4vw;
  height: 4vh;
  color: #fff;
`;

const IconeCirculoMenor = styled(BsFillCircleFill)`
  width: 2vw;
  height: 2vh;
  color: #fff;
  margin-top: -4px;
`;

const DivConteudo = styled.div`
  width: 100%;
  height: 100%;
  background-color: gold;
`;

const DivTextoExperiencia = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-start;
  background-color: blue;
`;

const TextoExperiencia = styled.p`
  color: #fff;
  font-size: clamp(1vw, 1.3vw, 1.5vw);

  @media (${device.laptop}) {
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }
`;

const DivAnoExperiencia = styled.div`
  width: 100%;
  height: 10%;
  background-color: orange;
  display: flex;
  align-items: flex-end;
`;

const TextoAnoExperiencia = styled.p`
  color: #fff;
  font-size: 1.5vw;
`;

const DivTituloExperiencia = styled.div`
  width: 100%;
  height: 10%;
  background-color: green;
  display: flex;
  align-items: center;
`;

const TextoTituloExperiencia = styled.p`
  color: #fff;
  font-size: 1vw;
  font-style: italic;
  font-weight: 800;
`;

const DivTextoProfissao = styled.div`
  width: 100%;
  height: 70%;
  background-color: brown;
`;

const DivNomeEmpresa = styled.p`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  background-color: gray;
`;
const NomeEmpresa = styled.p`
  color: #fff;
  font-size: 1vw;
  padding-left: 1rem;
`;

const DivNomeSetor = styled.p`
  width: 100%;
  height: 10%;
  background-color: aqua;
`;
const NomeSetor = styled.p`
  color: #fff;
  font-size: 1vw;
  padding-left: 1rem;
`;

const DivTextoSuporte = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background-color: pink;
`;

const TextoSuporte = styled.p`
  color: #fff;
  font-size: 1vw;
`;

const DivConhecimentoTecnico = styled.div`
  width: 100%;
  width: 30%;
  background-color: orange;
`;

function Curriculo() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [OpenMenuMain, setOpenMenuMain] = useState(false);

  return (
    <App>
      <Menu OpenMenuMain={OpenMenuMain} setOpenMenuMain={setOpenMenuMain} />
      <MenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
      {/* Importando do indexHome.jsx */}
      <DivIconeBotaoOpen>
        <IconeBotaoMenuPrincipalOpen
          onClick={() => setOpenMenuMain(false)}
          OpenMenuMain={OpenMenuMain}
        />
      </DivIconeBotaoOpen>
      <DivTelaMain>
        <DivTextoCurriculo>
          <TextoCurriculo>Currículo</TextoCurriculo>
        </DivTextoCurriculo>
        <DivExperienciaProfissional>
          <DivIcones>
            <IconeCirculo />
            <DivLinha />
            <IconeCirculoMenor />
            <DivLinha />
            <DivLinha />
            <DivLinha />
            <DivLinha />
            <DivLinha />
            <DivLinha />
            <DivLinha />
            <DivLinha />
            <DivLinha />
            <DivLinha />
          </DivIcones>

          <DivConteudo>
            <DivTextoExperiencia>
              <TextoExperiencia>Experiências Profissionais</TextoExperiencia>
            </DivTextoExperiencia>
            <DivAnoExperiencia>
              <TextoAnoExperiencia>2022</TextoAnoExperiencia>
            </DivAnoExperiencia>
            <DivTituloExperiencia>
              <TextoTituloExperiencia>
                Analista de Redes e de Comunicação de Dados
              </TextoTituloExperiencia>
            </DivTituloExperiencia>
            <DivTextoProfissao>
              <DivNomeEmpresa>
                <NomeEmpresa>BluePex® CyberSecurity</NomeEmpresa>
              </DivNomeEmpresa>
              <DivNomeSetor>
                <NomeSetor>Suporte Técnico</NomeSetor>
              </DivNomeSetor>
              <DivTextoSuporte>
                <TextoSuporte>
                  Realizo atendimento aos clientes diariamente e através disto
                  adquiri diversos conhecimentos, tais como:
                </TextoSuporte>
              </DivTextoSuporte>

              <DivConhecimentoTecnico></DivConhecimentoTecnico>
            </DivTextoProfissao>
          </DivConteudo>
        </DivExperienciaProfissional>
      </DivTelaMain>
    </App>
  );
}

export default Curriculo;
