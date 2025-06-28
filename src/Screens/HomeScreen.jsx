import Header from "../Components/Header";
import SolarCard from "../Components/SolarCard";
import Footer from "../Components/Footer";
import card from "../card"
import SolarCarousel from "../Components/SolarCarousel";
import Certifications from "../Components/Certifications";

function HomeScreen() {
  return (
    <>
      <Header />
      <section className="flex flex-wrap justify-center gap-6 p-10">
        {card.map((item, index) => (
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

      <Certifications />
      <Footer />
    </>
  );
}

export default HomeScreen;
