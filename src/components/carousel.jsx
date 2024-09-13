
import Carousel from 'react-bootstrap/Carousel';

function DefaultCarousel() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item style={{height:"500px"}}>
        <img
          className="d-block w-50 mx-auto h-75" 
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"500px"}}>
        <img
          className="d-block w-50 mx-auto h-75"
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item  style={{height:"500px"}}>
        <img
          className="d-block w-50 mx-auto h-75"
          src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default  DefaultCarousel;
