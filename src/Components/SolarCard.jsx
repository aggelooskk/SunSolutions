import { Link } from "react-router-dom";

function SolarCard({ name, description, image, route }) {
  return (
    <>
      <div className="w-60 m-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition-colors duration-200">
        <img
          src={image}
          alt={name}
          className="w-2/3 h-32 object-contain mb-4"
        />
        <h3 className="text-lg font-bold font-sans mb-2">{name}</h3>
        <p className="text-sm font-serif text-gray-600 mb-4">{description}</p>
        <Link
          to={route}
          className="mt-auto px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-200 rounded"
        >
          Περισσότερα
        </Link>
      </div>
    </>
  );
}

export default SolarCard;
