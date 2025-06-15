import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="flex justify-between items-center h-20 p-4 bg-gray-900 text-white shadow-md font-mono">
        <Link
          to="/"
          className="text-lg sm:text-2xl font-bold uppercase hover:text-orange-400 transition-colors duration-200"
        >
          Sun Solutions Co.
        </Link>
        <button
          onClick={toggleMenu}
          className="sm:hidden block text-white hover:text-orange-400 transition-colors duration-200 focus:outline-none "
        >
          <span className="text-2xl">&#9776;</span>
        </button>
        <div className="hidden sm:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-200">
            Αρχική
          </Link>
          <Link to="/contact" className="hover:text-orange-400 transition-colors duration-200">
            Επικοινωνία
          </Link>
          <Link to="#" className="hover:text-orange-400 transition-colors duration-200">
            Σχετικά
          </Link>
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
              <Link to="/" className="block text-lg hover:text-orange-400 transition-colors duration-200">
                Αρχική
              </Link>
              <Link
                to="/contact"
                className="block text-lg hover:text-orange-400 transition-colors duration-200"
              >
                Επικοινωνία
              </Link>
              <Link to="#" className="block text-lg hover:text-orange-400 transition-colors duration-200">
                Σχετικά
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
