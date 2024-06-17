import './App.css';
import Carousel from 'react-bootstrap/Carousel';

function Hola3(props)
{
    return(
        <div className="caja1">
            <div id="seccion3">
            </div>
            <div className='texto'>
            <h1>{props.subtitulo}</h1>
            </div>
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <center><img
          className="d-block "
          src="frenos.png"
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
        </div>
    );
}
export default Hola3;