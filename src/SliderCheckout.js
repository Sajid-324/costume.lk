import React from "react";
import "./Slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const SliderCheckout = () => {
  return (
    <div>
      <Carousel fade={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/images/checkoutBanners/100_generated.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/images/checkoutBanners/101_generated.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/images/checkoutBanners/102_generated.jpg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/images/checkoutBanners/103_generated.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default SliderCheckout;
