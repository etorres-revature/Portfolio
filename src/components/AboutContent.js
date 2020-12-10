import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutContent = (props) => {
  return (
    <Container>
      <Row className="card justify-content-center p-3">
        <Col>{props.children}</Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
