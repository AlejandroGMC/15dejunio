import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hola from './componente1';
import Hola2 from './componente2';
import Hola3 from './componente3';
import Hola4 from './componente4';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App descripcion="Nuestro taller es de última generación dedicado a la reparación y mantenimiento de vehículos. Con un equipo de técnicos altamente capacitados y experimentados, este taller se enorgullece de su habilidad para manejar una amplia gama de problemas automotrices.
        El taller está equipado con tecnología de punta, incluyendo herramientas de diagnóstico computarizado y equipos de alineación láser. Además, cuenta con una amplia gama de piezas de repuesto originales para garantizar que los vehículos sean reparados con los componentes de la más alta calidad."
        imagen="tallerdemantinimientovehicular.jpg"
        />
    <Hola subtitulo="Inspección de luces y limpia parabrisas"/>
    <Hola2 subtitulo="Revision con equipo de diagnostico"/>
    <Hola3 subtitulo="Aseo e inspeccion de frenos desmontando las 4 ruedas"/>
    <Hola4 subtitulo="Cambio de filtro del aceite del motor"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
