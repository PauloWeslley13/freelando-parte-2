import { useState } from "react";
import { Col, Row } from "react-grid-system";
import { Link as RouterLink } from 'react-router-dom'
import { GrupoRadio } from "../../componentes/GrupoRadio/GrupoRadio";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Botao } from '../../componentes/Botao/Botao'
import { useInteresses } from "./useInteresses";

const Interesses = () => {
  const [opcao, setOpcao] = useState(false)
  const { listaOpcoes } = useInteresses()

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Tipografia variante="h1" componente="h1">
          Crie seu cadastro
        </Tipografia>
        <Tipografia variante="h3" componente="h2">
          Qual a área de interesse?
        </Tipografia>
      </div>

      <GrupoRadio opcoes={listaOpcoes} valor={opcao} onChange={setOpcao} />

      <Row>
        <Col lg={6} md={6} sm={6}>
          <RouterLink to="/cadastro">
            <Botao variante="secundario">
              Anterior
            </Botao>
          </RouterLink>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'right' }}>
            <RouterLink to="/cadastro/dados-pessoais">
              <Botao>
                Anterior
              </Botao>
            </RouterLink>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Interesses;