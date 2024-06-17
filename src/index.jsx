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
    <Hola subtitulo="Inspección de luces y limpia parabrisas"
    descrip="Verificamos todas las luces: Asegúrate de que todas las luces funcionen correctamente, incluyendo faros, luces traseras, intermitentes y luces de freno.  
    Inspeccionamos las escobillas del limpiaparabrisas: Si están desgastadas, agrietadas o no limpian correctamente, es hora de reemplazarlas.
    Limpiamos el parabrisas: Utiliza un paño limpio y agua para eliminar la suciedad y los insectos. Asegúrate de que esté libre de obstrucciones.
    Verificamos el nivel del líquido limpiaparabrisas: Rellénalo si es necesario con un producto de calidad para una limpieza efectiva."
    />
    <Hola2 subtitulo="Revision con equipo de diagnostico"
    descrip="Motor:
Examinamos el motor en busca de posibles problemas, como ruidos inusuales, fugas de aceite o fallas en los componentes.
Verificamos la presión del aceite y la temperatura del motor.
Escaneamos códigos de error almacenados en la computadora del vehículo.
Transmisión:
Comprobamos el funcionamiento suave de la transmisión y buscamos cambios bruscos o vibraciones.
Realizamos una prueba de conducción para evaluar la respuesta de la transmisión en diferentes velocidades.
Frenos:
Inspeccionamos las pastillas y discos de freno en busca de desgaste.
Verificamos el nivel de líquido de frenos y buscamos posibles fugas.
Suspensión y dirección:
Examinamos los amortiguadores, los brazos de control y las rótulas.
Giramos el volante para evaluar la respuesta de la dirección.
Luces y electrónica:
Verificamos el funcionamiento de todas las luces, incluyendo faros, intermitentes y luces traseras.
Escaneamos el sistema eléctrico en busca de errores o fallos."/>
    <Hola3 subtitulo="Aseo e inspeccion de frenos desmontando las 4 ruedas"
    descrip="Inspección visual de los frenos:
Verificamos el sistema de frenos: Si es de discos en las cuatro ruedas, seguimos el procedimiento para discos en las cuatro ruedas1.
Procedimiento en discos (si aplica):
Soltamos el caliper de las cuatro mordazas y verificamos el estado de las pastillas.
Si las pastillas no necesitan cambio, realizamos un lijado en las superficies de asbesto.
Realizamos limpieza y lubricación en todas las piezas mecánicas del sistema (pasadores, calipers, láminas quitarruidos y mordazas).
Devolvemos los cilindros de la mordaza si se deben reemplazar las pastillas.
Verificamos el par de apriete de cada tornillo manipulado y del sistema en general1.
Procedimiento en bandas (si aplica):
Soltamos las campanas asegurándonos de que el freno de mano no esté accionado.
Verificamos el estado de las bandas (altura, integridad y superficie).
Lijamos las bandas para eliminar rebarbas y posibles ruidos.
    "/>
    <Hola4 subtitulo="Cambio de filtro del aceite del motor"
    descrip="Arranca el coche durante 5 o 10 minutos:
El cambio del filtro y el vaciado del aceite se deben hacer con el aceite caliente. Arranca el coche durante unos minutos para lograrlo.
Encuentra el tapón de vaciado de aceite:
En la mayoría de los coches, el tapón está en la parte baja, justo debajo del motor. A veces, es necesario quitar una protección de bajos del motor con una llave para acceder a él. Si tu coche no tiene un tapón, infórmate sobre el procedimiento específico.
Coloca un recipiente bajo el tapón de vaciado:
Evita ensuciar el suelo y recoge todo el aceite usado en un recipiente.
Desenrosca el filtro antiguo:
Utiliza la llave adecuada para desenroscar el filtro de aceite.
Lubrica el sello de goma del filtro nuevo:
Aplica una fina capa de aceite alrededor del sello de goma del filtro nuevo.
Coloca el filtro nuevo:
Enrosca manualmente el nuevo filtro con cuidado hasta que haga tope.
Añade el nuevo aceite:
Rellena el motor con aceite nuevo utilizando un embudo."/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
