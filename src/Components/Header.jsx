import React from "react";

const Header = () => {
  return (
    <>
      <nav className="shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Sun Solutions</h1>
          <ul className="flex space-x-6 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">Contact us</li>
            <li className="hover:text-gray-800 cursor-pointer">About</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
