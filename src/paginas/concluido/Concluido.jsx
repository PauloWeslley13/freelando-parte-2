import { css } from "@emotion/css";
import { Link as RouterLink } from 'react-router-dom'
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";

const Concluido = () => {
  return (
    <section className={css({ textAlign: 'center' })}>
      <Tipografia variante="h1" componente="h1">
        Seu perfil esta completo
      </Tipografia>

      <Tipografia variante="body" componente="body">
        Agora é só começar a se conectar com os melhores freelancers do mercado!
      </Tipografia>

      <div>
        <img
          src="/cliente-concluido.png"
          alt="Foto do cliente"
          className={css({ maxWidth: '100%', borderRadius: 15 })}
        />
      </div>

      <Row>
        <Col lg={12} md={12} sm={12} align="center" justify="center">
          <RouterLink
            to=".."
            className={css({ display: 'inline-block', marginTop: 25 })}
          >
            <Botao variante="secundaria">
              Voltar para a home
            </Botao>
          </RouterLink>
        </Col>
      </Row>

    </section>
  );
}

export default Concluido;