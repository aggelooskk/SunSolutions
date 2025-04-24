import React from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import SolarCard from "../Components/SolarCard";
import SolarCarousel from "../Components/SolarCarousel";
import Footer from "../Components/Footer";
import data from "../data.json"

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Container className="d-flex flex-wrap justify-content-center m-5 p-5">
        {data.map((item, index) => (
          <SolarCard
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </Container>
      <Container className="d-flex justify-content-center">
        <SolarCarousel />
      </Container>
      <Container className="d-flex justify-content-center m-5">
      <img src="/stamps.png" alt="stamps" className="w-100" />
      </Container>
      <Footer />
    </div>
  );
};

export default HomeScreen;
