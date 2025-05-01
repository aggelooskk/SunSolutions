import React from "react";
import Header from "../Components/Header";
import SolarCard from "../Components/SolarCard";
import Footer from "../Components/Footer";
import data from "../data.json";

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
          />
        ))}
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
