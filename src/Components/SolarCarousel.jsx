import React from "react";
import { Carousel } from "react-bootstrap";
import eurostar from "../assets/solars/eurostar.png";

const SolarCarousel = () => {
  return (
    <Carousel className="w-100 m-5">
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={eurostar}
          alt="Eurostar Panel"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item></Carousel.Item>
      <Carousel.Item></Carousel.Item>
    </Carousel>
  );
};

export default SolarCarousel;
