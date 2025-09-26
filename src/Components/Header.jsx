import { useState } from "react";
import { Link } from "react-router-dom";
import burjKhalifa from "../Images/random/burjkhalifa.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative h-screen w-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${burjKhalifa})` }}
        ></div>
        <div className="absolute inset-0 bg-gray-500 bg-opacity-40"></div>
        {/* Center-left overlay text */}
        <div className="flex items-center justify-center w-fit h-full mx-3 ">
          <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl drop-shadow-xl font-sans ">
            Αξιοπιστία{" "}
            <strong className="text-orange-500 font-bold">οικονομία</strong> και{" "}
            <strong className="text-orange-500 font-bold">οικολογική</strong>{" "}
            λύση για κάθε σπίτι.
          </span>
        </div>
        <nav className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center text-white font-mono">
          <h1 className="text-xl sm:text-2xl font-bold uppercase hover:text-orange-400 transition-colors duration-200">
            Sun Solutions Co.
          </h1>
          <div className="hidden md:flex md:flex-row space-x-6">
            <Link
              to="/"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Αρχική
            </Link>
            <Link
              to="/contact"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Επικοινωνιά
            </Link>
            <Link
              to="/about"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Σχετικά
            </Link>
          </div>
          {!isOpen && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-white hover:text-orange-400 transition-colors duration-200 "
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          )}
        </nav>
        {isOpen && (
          <div className="absolute top-0 right-0 w-2/3 h-full bg-black bg-opacity-90 text-white z-40 p-6 md:hidden transition duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="mt-12 flex flex-col space-y-4 text-lg">
              <Link
                to="/"
                className="hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Αρχική
              </Link>
              <Link
                to="/contact"
                className="hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Επικοινωνία
              </Link>
              <Link
                to="/about"
                className="hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Σχετικά
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
