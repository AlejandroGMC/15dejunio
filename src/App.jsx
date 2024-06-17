import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App(props) {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='a'>
          <Navbar.Brand href="menu">Menu</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#seccion1">Inspección de luces y limpia parabrisas</Nav.Link>
            <Nav.Link href="#seccion2">Revisión con equipo de diagnóstico</Nav.Link>
            <Nav.Link href="#seccion3">Aseo e inspección de frenos desmontando las 4 ruedas</Nav.Link>
            <Nav.Link href="#seccion4">Cambio de filtro del aceite del motor</Nav.Link>
            </Nav>
        </Container>
        <div id="menu">
        </div>
      </Navbar>
      <header className="App-header">
        <br />
        <h1>TALLER DE MANTENIMIENTO DE VEHICULOS</h1>
        <br />
        <img src={props.imagen} className="App-logo" alt="logo" />
        <br />
        <p>
        {props.descripcion}
        </p>
        <p>
        ¿QUE SE HACE EN CADA MANTENIMIENTO?
        </p>
      </header>
    </div>
  );
}

export default App;
