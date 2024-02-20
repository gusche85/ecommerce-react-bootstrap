import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade className='align-items-center text-center m-3' indicators={false} interval={4000}> 
      <Carousel.Item>
        <img className="w-100 object-fit-cover"
          src='/slide5.png'
          height="550px"
        />
        <Carousel.Caption>
          <h3>Perfume is like a new dress, it makes you quite simply marvellous.</h3>
          <p>
            - Estee Lauder.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 object-fit-cover"
          src='/slide6.png'
          height="550px"
        />
        <Carousel.Caption className="text-dark">
          <h3>You are never fully dressed without perfume.</h3>
          <p>
            - C. Joybell C.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 object-fit-cover"
          src='/slide7.png'
          height="550px"
        />
        <Carousel.Caption>
          <h3>Nothing brings to life again a forgotten memory like fragrance.</h3>
          <p>
            - Christopher Poindexter
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 object-fit-cover"
          src='/slide9.png'
          height="550px"
        />
        <Carousel.Caption className="text-dark">
          <h3>Beauty is an exquisite flower, and its perfume is virtue.</h3>
          <p>
            - Giovanni Ruffini
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;