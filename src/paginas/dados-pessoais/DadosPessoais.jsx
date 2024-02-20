import { Col, Row } from "react-grid-system";
import { Link as RouterLink } from 'react-router-dom'
import { css } from '@emotion/css'
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Botao } from "../../componentes/Botao/Botao";
import Formulario from './formulario/formulario'

const DadosPessoais = () => {
  return (
    <>
      <div className={css({ textAlign: 'center' })}>
        <Tipografia variante="h1" componente="h1">
          Crie seu cadastro
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os
          melhores freelancers. Em seguida, você poderá dar mais detalhes
          sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
      </div>

      <Formulario />

      <Row>
        <Col lg={6} md={6} sm={6}>
          <RouterLink to="/cadastro/interesses">
            <Botao variante="secundaria">
              Anterior
            </Botao>
          </RouterLink>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'right' }}>
            <RouterLink to="/cadastro/concluido">
              <Botao>Proximo</Botao>
            </RouterLink>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DadosPessoais;