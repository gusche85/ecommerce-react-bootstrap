import React from 'react';
//import { Navibar } from './../../common';

import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade className='align-items-center text-center m-3' indicators={false} interval={4000}> 
      <Carousel.Item>
        <img className="w-100 object-fit-cover"
          src='/slide5.png'
          height="550px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 object-fit-cover"
          src='/slide6.png'
          height="550px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 object-fit-cover"
          src='/slide7.png'
          height="550px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 object-fit-cover"
          src='/slide8.png'
          height="550px"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;