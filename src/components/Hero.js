import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./Hero.css";

const Hero = (props) => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={false}>
        <Row className="justify-content-center py-5">
          <Col md={9} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 font-weight-light text-center">{props.subTitle}</h3>
            )}
            {props.memo && (
              <h4 className="lead font-weight-light">{props.memo}</h4>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
