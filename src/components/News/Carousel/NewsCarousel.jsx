import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../../assets/NewsHero.jpeg';
import News2 from '../../../assets/News2.png';
import "./NewsCarousel.css";

export const NewsCarousel = () => {
  return (
    <div className='d-flex flex-column justify-conetnt-center align-items-center'>
      <h2 className='text-center heading1'>OUR ACHIEVEMENTS</h2>
    <Carousel className='carousel'>
      <Carousel.Item>
        <div className="carouselImage">
        <div className="carouselImageInner">
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        </div>

        </div>
        
        <Carousel.Caption>
          <h1>First slide label</h1>
          <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carouselImage">
      <div className="carouselImageInner">
        <img
          className="d-block w-100"
          src={News2}
          alt="Second slide"
        />
        </div>
        </div>
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carouselImage">
      <div className="carouselImageInner">
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="Third slide"
        />
        </div>
        </div>
        <Carousel.Caption>
          <div className="carouselImageHeading">
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};
