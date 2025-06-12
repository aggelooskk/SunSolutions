import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative h-screen w-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/burjkhalifa.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <nav className="absolute top-0 left-0 right-0 z-50 p-4 flex justify-between items-center text-white font-mono">
          <h1 className="text-xl sm:text-2xl font-bold uppercase">
            Sun Solutions & Co.
          </h1>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Αρχική
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Επικοινωνιά
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              Σχετικά
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>
        {isOpen && (
          <div className="absolute top-0 right-0 w-2/3 h-full bg-black bg-opacity-90 text-white z-40 p-6 md:hidden transition duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="mt-12 space-y-4 text-lg">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Αρχική
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Επικοινωνία
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>
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
