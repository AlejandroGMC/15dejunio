import './App.css';
function Hola4(props)
{
    return(
        <div className="caja1">
            <div className='texto'>
            <h1>Cambio de filtro de aceite de motor.</h1>
            <h1>Hola soy{props.nombre}</h1>
            <p> Soy de {props.pais} y estudio en la {props.uni}</p>
            </div>
        </div>
    );
}
export default Hola4;