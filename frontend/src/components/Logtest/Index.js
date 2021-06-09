import React from "react";
import SignUp from "./SignUp";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Index() {
  return (
    <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <SignUp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
