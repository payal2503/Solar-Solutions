 import React from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';

const Home = () => {
  return (
      <div>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-80"
          src={slider1}
          alt="First slide"
          width="1095"
          height={340}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-80"
          src={slider2}
          alt="Third slide"
          width="1095"
          height={340}
        />
        <Carousel.Caption>
          <h3>Electrician mounting solar panel on roof of house</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-80 h-80"
          src={slider3}
          alt="Third slide"
          width="1095"
          height={340}
        />
        <Carousel.Caption>
          <h3>Powerhouse</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  )
}

export default Home;
