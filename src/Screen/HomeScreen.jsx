import React from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import SolarCard from "../Components/SolarCard";
import SolarCarousel from "../Components/SolarCarousel";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Container className="d-flex flex-wrap justify-content-center m-5 p-5">
        <SolarCard />
        <SolarCard />
        <SolarCard />
      </Container>
      <Container className="d-flex justify-content-center">
        <SolarCarousel />
      </Container>
    </div>
  );
};

export default HomeScreen;
