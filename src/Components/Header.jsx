import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import panelImage from "../assets/panel.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative bg-cover bg-center h-24 sm:h-40" style={{ backgroundImage: `url(${panelImage})` }}>
      <header className="flex items-center justify-between p-4 sm:p-6 text-white">
        <a href="/" className="text-lg sm:text-2xl font-bold uppercase">
          Title
        </a>
        <nav className="hidden sm:flex gap-8 text-lg">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden text-2xl"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </header>
      {showMenu && (
        <nav className="absolute top-full left-0 w-full bg-black/70 text-white flex flex-col items-center py-4 gap-4 sm:hidden">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
      )}
    </div>
  );
};

export default Header;
