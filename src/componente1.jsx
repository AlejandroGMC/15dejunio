import './App.css';
import Carousel from 'react-bootstrap/Carousel';

function Hola(props)
{
    return(
        <div className="caja1">
            <div id="seccion1">
            </div>
            <div className='texto'>
            <h1>{props.subtitulo}</h1>
            </div>
            <br />
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <center><img
          className="d-block "
          src="shutterstock_450847201.png"
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
    <h4>{props.descrip}</h4>        
        <br />
        </div>
        
    );
}
export default Hola;