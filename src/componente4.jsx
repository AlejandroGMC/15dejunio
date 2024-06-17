import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
function Hola4(props)
{   
    const [show, setShow] = useState(true);
    return(
        <div className="caja1">
            <div id="seccion4">
            </div>
            <div className='texto'>
            <h1>{props.subtitulo}</h1>
            </div>
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <center><img
          className="d-block "
          src="aceite.png"
          alt="First slide"
          width="600" height="400"
        /></center>
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <center><img
          className="d-block "
          src="1.png"
          alt="First slide"
          width="600" height="400"
        /></center>
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <center><img
          className="d-block "
          src="2.png"
          alt="First slide"
          width="600" height="400"
        /></center>
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
        </Carousel.Item>
      
    </Carousel>
            <br />
            <center><h1>ENVIANOS UN CORREO!!</h1></center>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><h1>Correo electronico:</h1></Form.Label>
        <Form.Control type="email" placeholder="nombre@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h1>Mensaje:</h1></Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <br />
    <Alert show={show} variant="success">
        <Alert.Heading>ALERTA!!</Alert.Heading>
        <p>
          Nombre: Alejandro Gabriel Mallcu Calani
          <br />
          Materia: Programacion web2
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

    <center>{!show && <Button onClick={() => setShow(true)}>CLICK AQUI!!</Button>}</center>
    <br />
    <center><a href="#top">Volver al inicio</a></center>
        </div>
    );
}
export default Hola4;