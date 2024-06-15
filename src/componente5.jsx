import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import react from "react"

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Inspección de luces y limpia parabrisas</Nav.Link>
            <Nav.Link href="#features">Revisión con equipo de diagnóstico</Nav.Link>
            <Nav.Link href="#pricing">Aseo e inspección de frenos desmontandos las 4 ruedas</Nav.Link>
            <Nav.Link href="#cambio">Cambio de filtro de aceite de motor</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <header className="App-header">



        <h1>TALLER DE MANTENIMIENTO DE VEHICULOS</h1>
        <img src="tallerdemantinimientovehicular.jpg" className="App-logo" alt="logo" />
        <p>
        Nuestro taller es de última generación dedicado a la reparación y mantenimiento de vehículos. Con un equipo de técnicos altamente capacitados y experimentados, este taller se enorgullece de su habilidad para manejar una amplia gama de problemas automotrices.
        El taller está equipado con tecnología de punta, incluyendo herramientas de diagnóstico computarizado y equipos de alineación láser. Además, cuenta con una amplia gama de piezas de repuesto originales para garantizar que los vehículos sean reparados con los componentes de la más alta calidad.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <p>
        ¿Qué se hace en cada mantenimiento?
        </p>
      </header>
    </div>
  );
}

export default App;
