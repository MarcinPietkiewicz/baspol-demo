import "./App.scss";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="cont">
        <Row className="bg-light text-dark">
          <Col sm="8">
            <h2>BASPOL DEMO</h2>
          </Col>
          <Col sm="4">Listy płac ver 0.1</Col>
        </Row>
        <Row>
          <Stack gap={2} className="col-sm-4 mx-auto">
            <p>Klient 1</p>
            <p>Klient 2</p>
          </Stack>
        </Row>
        <Row className="m-3">
          <Stack gap={2} className="col-sm-4 mx-auto">
            <Button variant="primary">Dodaj nowego klienta</Button>
            <Button variant="outline-primary">Wyloguj</Button>
          </Stack>
        </Row>
      </Container>
    </div>
  );
}

export default App;
