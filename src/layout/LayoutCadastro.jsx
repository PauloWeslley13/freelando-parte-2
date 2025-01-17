import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Col, Row } from "react-grid-system";
import { Card } from "../componentes/Card/Card";

const LayoutBase = () => {
  const { pathname } = useLocation()

  if (pathname === '/') return <Navigate to="/cadastro" />

  return (
    <Row justify="center">
      <Col
        xxx={6}
        xxl={6}
        xl={6}
        lg={6}
        md={8}
        sm={12}
        style={{ margin: '80px 0' }}
      >
        <Card>
          <Outlet />
        </Card>
      </Col>
    </Row>
  );
}

export default LayoutBase;