import React from "react";
import CustomCard from "./Card";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="App d-flex vh-100">
      <Row className="m-auto">
        <Col>
          <CustomCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
