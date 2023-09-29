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
  @media (min-width: 770px) {
    font-size: clamp(2vw, 3vw, 3.5vw);
  }
  @media (${device.tablet}) {
    font-size: clamp(3vw, 4vw, 4.5vw);
  }
`;

const DivExperienciaProfissional = styled.div`
  width: 60%;
  height: 60%;
  /* background-color: pink; */
  display: flex;

  @media (${device.tablet}) {
    width: 80%;
    height: 50%;
  }
`;

const DivIcones = styled.div`
  width: 10%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (${device.tablet}) {
    width: 10%;
  }
  @media (min-width: 770px) and (max-width: 1200px) {
    width: 10%;
  }
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
  /* background-color: gold; */
`;

const DivTextoExperiencia = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: flex-start;
  /* background-color: blue; */

  @media (${device.tablet}) {
    align-items: center;
  }
`;

const TextoExperiencia = styled.p`
  color: #fff;
  font-size: clamp(1vw, 1.3vw, 1.5vw);

  @media (min-width: 770px) and (max-width: 1200px) {
    font-size: clamp(2vw, 2.3vw, 3.5vw);
  }
  @media (max-width: 490px) {
    font-size: clamp(3vw, 4vw, 4.5vw);
  }
  @media (min-width: 490px) and (max-width: 770px) {
    font-size: clamp(2vw, 2.5vw, 3vw);
  }
`;

const DivAnoExperiencia = styled.div`
  width: 100%;
  height: 12%;
  /* background-color: orange; */
  display: flex;
  align-items: flex-end;

  @media (min-width: 770px) {
    height: 9%;
  }
`;

const TextoAnoExperiencia = styled.p`
  color: #fff;
  font-size: 1.5vw;

  @media (max-width: 490px) {
    font-size: 3vw;
  }
  @media (min-width: 490px) and (max-width: 770px) {
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }
  @media (min-width: 770px) and (max-width: 1200px) {
    font-size: clamp(1.5vw, 1.7vw, 2.2vw);
  }
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
  @media (max-width: 490px) {
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }
  @media (min-width: 490px) and (max-width: 770px) {
    font-size: clamp(1vw, 1.5vw, 2vw);
  }

  @media (min-width: 770px) and (max-width: 1200px) {
    font-size: clamp(1vw, 1.3vw, 2vw);
  }
`;

const DivTextoProfissao = styled.div`
  width: 100%;
  height: 70%;
  /* background-color: brown; */
`;

const DivNomeEmpresa = styled.p`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  /* background-color: gray; */
`;
const NomeEmpresa = styled.p`
  color: #fff;
  font-size: 1vw;
  padding-left: 1rem;

  @media (max-width: 490px) {
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }

  @media (min-width: 490px) and (max-width: 770px) {
    font-size: clamp(1vw, 1.5vw, 2vw);
  }

  @media (min-width: 770px) and (max-width: 1200px) {
    font-size: clamp(1vw, 1.1vw, 2vw);
  }
`;

const DivTextoSuporte = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  /* background-color: pink; */
`;

const TextoSuporte = styled.p`
  color: #fff;
  font-size: 1vw;

  @media (max-width: 490px) {
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }
  @media (min-width: 490px) and (max-width: 770px) {
    font-size: clamp(1vw, 1.5vw, 2vw);
  }
  @media (min-width: 770px) and (max-width: 1200px) {
    font-size: clamp(1vw, 1.1vw, 2vw);
  }
`;

const DivConhecimentoTecnico = styled.div`
  width: 100%;
  height: 65%;
  /* background-color: orange; */
`;

const TextoConhecimentoTecnico = styled.p`
  color: #fff;
  font-size: 1vw;
  padding-left: 1rem;
  @media (min-width: 770px) and (max-width: 1200px) {
    font-size: clamp(1vw, 1vw, 2vw);
  }

  @media (min-width: 490px) and (max-width: 768px) {
    font-size: clamp(1vw, 1.6vw, 2vw);
  }
  @media (max-width: 490px) {
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }
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
            <IconeCirculoMenor />
          </DivIcones>

          <DivConteudo>
            <DivTextoExperiencia>
              <TextoExperiencia>Experiências Profissionais</TextoExperiencia>
            </DivTextoExperiencia>
            <DivAnoExperiencia>
              <TextoAnoExperiencia>
                Agosto de 2022 / Até o momento
              </TextoAnoExperiencia>
            </DivAnoExperiencia>
            <DivTituloExperiencia>
              <TextoTituloExperiencia>
                Analista de Redes e de Comunicação de Dados
              </TextoTituloExperiencia>
            </DivTituloExperiencia>
            <DivTextoProfissao>
              <DivNomeEmpresa>
                <NomeEmpresa>
                  Atuando na <i>BluePex® CyberSecurity</i> no Suporte Técnico
                </NomeEmpresa>
              </DivNomeEmpresa>
              <DivTextoSuporte>
                <TextoSuporte>
                  Realizo atendimento aos clientes diariamente e através disto
                  adquiri diversos conhecimentos, tais como:
                </TextoSuporte>
              </DivTextoSuporte>

              <DivConhecimentoTecnico>
                <TextoConhecimentoTecnico>
                  - Conhecimento técnico em Firewall, EndPoint, Backup e E-mail
                </TextoConhecimentoTecnico>

                <TextoConhecimentoTecnico>
                  - Configurações de servidores DHCP, DNS, Active Directory
                </TextoConhecimentoTecnico>

                <TextoConhecimentoTecnico>
                  - Configurações e gerenciamento de regras de firewall
                </TextoConhecimentoTecnico>

                <TextoConhecimentoTecnico>
                  - Análise de regras de Firewall, orientando as alterações
                  necessárias para uma maior segurança
                </TextoConhecimentoTecnico>
                <TextoConhecimentoTecnico>
                  - Configuração de regras de redirecionamento de
                  porta(externo/interno).
                </TextoConhecimentoTecnico>

                <TextoConhecimentoTecnico>
                  - Configurações de Proxy e monitoramento para verificar a
                  filtragem necessária de navegação a se fazer.
                </TextoConhecimentoTecnico>

                <TextoConhecimentoTecnico>
                  - Configuração de VPN OpenVPN(Client to Site), VPN IPsec(Site
                  to Site), VPN OpenVPN com o serviço de gerenciamento de rotas
                  BGP/FRR(Site to Site) assim interligando possíveis filiais
                  através destas configurações.
                </TextoConhecimentoTecnico>
                <TextoConhecimentoTecnico>
                  - Configurações de LoadBalance e FailOver para estabelecer uma
                  redundância entre links de internet.
                </TextoConhecimentoTecnico>
                <TextoConhecimentoTecnico>
                  - Segmentação de rede através de VLAN's- Conhecimentos em
                  terminais linux.
                </TextoConhecimentoTecnico>
              </DivConhecimentoTecnico>
            </DivTextoProfissao>
          </DivConteudo>
        </DivExperienciaProfissional>
      </DivTelaMain>
    </App>
  );
}

export default Curriculo;
