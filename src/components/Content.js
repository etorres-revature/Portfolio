import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Content = (props) => {
  return (
    <Container>
      <Row className="card justify-content-center p-3">
        <Col>{props.children}</Col>
      </Row>
    </Container>
  );
};

export default Content;
