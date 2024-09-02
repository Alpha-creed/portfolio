import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS here
import contact from '../assets/ContactPage.png';
import Breakfast from '../assets/BreakfastPage.png';
import Dinner from '../assets/DinnerPage.png';
import Menu from '../assets/Menu.png';
import AboutUs from '../assets/AboutUsPage.png';
import home from '../assets/homePage.png';
import { Image, Box, Center } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel from react-bootstrap

const ImageCarousel = () => {
  return (
    <Carousel data-bs-theme="dark" fade='true' >
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={home}
          alt="Home"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={AboutUs}
          alt="About Us"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Menu}
          alt="Menu"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Dinner}
          alt="Dinner"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Breakfast}
          alt="Breakfast"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={contact}
          alt="Contact"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
