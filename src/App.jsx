import {useState} from "react";
import "./App.scss";
import { Container, Row, Col, Button, Stack, Modal, Form } from "react-bootstrap";

function App() {
  const [newClientModalShow, setNewClientModalShow] = useState(false);
  const [clients, setClients] = useState({});

  

  return (
    <div className="App">
      <Container className="cont">
        <Row className="bg-light text-dark">
          <Col>
            <h2>Baspol Demo</h2>
            <h4>Listy płac</h4>
          </Col>
          <Col>Listy płac ver 0.1</Col>
        </Row>
        <Row>
          <Stack gap={2} className="col-sm-4 mx-auto p-2">
            <div className="bg-light border p-2">Klient 1 - ilość pracowników - ilość list płac</div>
            <div className="bg-light border p-2">Klient 2 - ilość pracowników - ilość list płac</div>
            <Button
              variant="primary"
              onClick={() => {
                setNewClientModalShow(true);
              }}
            >
              Dodaj nowego klienta
            </Button>
          </Stack>
        </Row>
      </Container>

      <AddNewClientModal show={newClientModalShow} onHide={() => setNewClientModalShow(false)} />
    </div>
  );
}

export default App;

// Components in main view

function AddNewClientModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Dodaj nowego klienta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddNewClientForm />
      </Modal.Body>
    </Modal>
  );
}

function AddNewClientForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formSurname">
        <Form.Label>Nazwisko / firma</Form.Label>
        <Form.Control type="text" placeholder="np. Kowalski" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Imię</Form.Label>
        <Form.Control type="text" placeholder="np. Jan" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Dodaj nowego Klienta
      </Button>
    </Form>
  );
}
