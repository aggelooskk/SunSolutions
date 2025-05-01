import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-transparent text-white font-mono">
        <a href="/" className="text-lg sm:text-2xl font-bold uppercase">
          Sun Solutions & Co.
        </a>
        <button
          onClick={toggleMenu}
          className="sm:hidden block text-white focus:outline-none"
        >
          <span className="text-2xl">&#9776;</span>
        </button>
        <div className="hidden sm:flex space-x-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-10 sm:hidden">
          <div className="absolute top-0 right-0 bg-white w-64 h-full p-6 space-y-6">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black text-2xl"
            >
              &#10005;
            </button>
            <nav className="space-y-4">
              <a href="/" className="block text-lg">
                Home
              </a>
              <a href="/contact" className="block text-lg">
                Contact
              </a>
              <a href="#" className="block text-lg">
                About
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
