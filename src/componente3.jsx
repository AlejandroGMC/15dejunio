import './App.css';
function Hola3(props)
{
    return(
        <div className="caja1">
            <div className='texto'>
            <h1>Aseo e inspección de frenos desmontandos las 4 ruedas.</h1>
            <h1>Hola soy{props.nombre}</h1>
            <p> Soy de {props.pais} y estudio en la {props.uni}</p>
            </div>
        </div>
    );
}
export default Hola3;