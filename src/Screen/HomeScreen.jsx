import React from "react";
import Header from "../Components/Header";
import SolarCard from "../Components/SolarCard";
import Footer from "../Components/Footer";
import data from "../data.json";
import SolarCarousel from "../Components/SolarCarousel";

function HomeScreen() {
  return (
    <>
      <Header />
      <section className="flex flex-wrap justify-center gap-6 p-10">
        {data.map((item, index) => (
          <SolarCard
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
            route={item.route}
          />
        ))}
      </section>

      <section className="w-full flex justify-center items-center py-6 px-4 bg-gray-100">
        <SolarCarousel />
      </section>

      <section className="flex justify-center items-center my-10 px-4">
        <img
          src="/stamps.png"
          alt="stamps"
          className="w-full max-w-6xl rounded-lg shadow-md"
        />
      </section>
      <Footer />
    </>
  );
}

export default HomeScreen;
