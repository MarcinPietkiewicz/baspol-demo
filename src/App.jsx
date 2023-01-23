import { useState } from "react";
import "./App.scss";
import { useEffect } from "react";
import { Container, Row, Col, Button, Stack, Modal, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addClient } from "./features/clients/client-slice";

function App() {
  const [newClientModalShow, setNewClientModalShow] = useState(false);
  const [clients, setClients] = useState([]);

  const x = useAppSelector((state) => state.clients);

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const x = data.clients.map((entry) => entry);
        console.log("x:");
        console.log(x);
        x.map((entry) => setClients([...clients, { firstName: entry.name, surname: entry.surname }]));
        // not working - don't know why?
        useAppDispatch(addClient("pellowski", "adam"));
        useAppDispatch(addClient(x.name, x.surname));
        return data;
      })
      .then(
        setTimeout((data) => {
          console.log("after 2 secs...:");
          console.log(clients);
        }, 2000)
      );
  }, []);

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
            <div className="bg-light border p-2">Klient 1 - ilość pracowników -</div>
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

function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  setNewClientModalShow(false);
}

function addNewClient(name, surname) {
  useAppDispatch(addClient(name, surname));
  console.log("dispatch sent");
}

// Components in main view

function AddNewClientModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered id="addNewClientModal">
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
    <Form onSubmit={handleSubmit}>
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
