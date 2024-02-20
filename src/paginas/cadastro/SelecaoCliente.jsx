import { Link as RouterLink } from "react-router-dom";
import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Link } from "../../componentes/Link/Link";

const SelecaoCliente = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Tipografia variante="h1" componente="h1">
          Crie seu cadastro
        </Tipografia>
        <Tipografia variante="h3" componente="h2">
          Como podemos te ajudar?
        </Tipografia>
     </div>

      <Row>
        <Col md={6} sm={12} align="center">
          <RouterLink to="interesses">
            <img src="/cliente.png" alt="cliente" />
            <Tipografia variante="body" componente="body">
              Sou cliente e preciso de um freela
            </Tipografia>
          </RouterLink>
        </Col>
        <Col md={6} sm={12} align="center">
          <RouterLink to="">
            <img src="/freela.png" alt="cliente" />
            <Tipografia variante="body" componente="body">
              Sou um freela e preciso de clientes!
            </Tipografia>
          </RouterLink>
        </Col>
      </Row>

      <div style={{textAlign: 'center'}}>
        <Tipografia variante="body2" componente="body2">
          Já tem conta?
        </Tipografia>

        <p>
          <Link variante="primary">Faça Login</Link>
        </p>
      </div>
    </>
  );
}

export default SelecaoCliente;