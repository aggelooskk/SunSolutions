import React from "react";
import { Carousel } from "react-bootstrap";

function SolarCarousel() {
  return (
    <Carousel className="w-100 m-5">
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="/assets/solars/eco.png"
          alt="Eurostar Panel"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item></Carousel.Item>
      <Carousel.Item></Carousel.Item>
    </Carousel>
  );
}

export default SolarCarousel;
