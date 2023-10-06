import Menu from "../MenuLateral/menuLateral.jsx";
import { App } from "../Home/indexHome.jsx";
import { useState } from "react";
import MenuMobile from "../MenuLateral/MenuLateralMobile/MenuMobile.jsx";
import {
  DivIconeBotaoOpen,
  IconeBotaoMenuPrincipalOpen,
} from "../Home/indexHome.jsx";
import { styled } from "styled-components";

import ImageCertificado1 from "../Certificados/Images/ImageCertificado1.png";
import ImageCertificado2 from "../Certificados/Images/ImageCertificado2.png";
import ImageCertificado3 from "../Certificados/Images/ImageCertificado3.png";
import ImageCertificado4 from "../Certificados/Images/CertificadoSkill.png";

const DivTelaMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(17, 14, 27);
`;

const DivMainTextoCertificados = styled.div`
  width: 100%;
  height: 10%;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextoCertificado = styled.p`
  color: #fff;
  font-size: 2vw;

  @media(max-width: 768px){
    font-size:  clamp(4vw, 5vw, 5.5vw);
  }
`;

const DivMainConteudo = styled.div`
  width: 100%;
  height: 90%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
`;

const DivMainCertificados = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media(min-width: 769px) and (max-width: 1100px){
    overflow: auto;
  }

  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
`;


const DivCertificados = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  background-color: gray;

  &:hover {
    scale: 0.9;
  }
`;

const ImagensCertificados = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  //object-fit: cover; // Dimensiona a imagem dentro da DIV
`;

const LinksCertificado = styled.a``;

function Certificados() {
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
        <DivMainTextoCertificados>
          <TextoCertificado>Certificados</TextoCertificado>
        </DivMainTextoCertificados>
        <DivMainConteudo>
          <DivMainCertificados>
              {/* Imagem 1 */}
              <DivCertificados>
                <LinksCertificado
                  href="https://cursos.alura.com.br/certificate/ac8c4777-74b0-4c72-9373-381b67ce7d08?lang=pt_BR"
                  target="_blank"
                >
                  <ImagensCertificados src={ImageCertificado1} />
                </LinksCertificado>
              </DivCertificados>


                {/* Imagem 2 */}
                <DivCertificados>
                <LinksCertificado
                  href="https://cursos.alura.com.br/certificate/09b4d5d9-95b7-46af-ae44-0524f17dc537?lang=pt_BR"
                  target="_blank"
                >
                  <ImagensCertificados src={ImageCertificado2} />
                </LinksCertificado>
              </DivCertificados>

              {/* Imagem 3 */}
              <DivCertificados>
                <LinksCertificado
                  href="https://cursos.alura.com.br/certificate/1ed3787c-e0d0-4663-a145-febf432091df?lang=pt_BR"
                  target="_blank"
                >
                  <ImagensCertificados src={ImageCertificado3} />
                </LinksCertificado>
              </DivCertificados>


            {/* Seção 2 Certificados */}

              {/* Imagem 4 */}
              <DivCertificados>
                <LinksCertificado
                  href="https://app.skilled.com.br/Certificado?Hash=C4491812BA1AE43D"
                  target="_blank"
                >
                 <ImagensCertificados src={ImageCertificado4} />
                </LinksCertificado>
              </DivCertificados>

          </DivMainCertificados>
        </DivMainConteudo>
      </DivTelaMain>
    </App>
  );
}

export default Certificados;
