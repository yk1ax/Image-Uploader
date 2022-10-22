import React from "react";
import CustomCard from "./Card";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <Container className="App d-flex vh-100">
      <Row className="m-auto w-100 justify-content-center">
        <Col xs={10} sm={8} md={6} lg={5} xl={4}>
          <CustomCard />
        </Col>
      </Row>
    </Container>
  );
}

