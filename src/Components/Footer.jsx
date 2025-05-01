import React from "react";
import { FaFacebook, FaGoogle, FaGithub, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-8 font-sans">
        <div className="text-center mb-6">
          <p className="text-sm font-mono mb-4">
            Get connected with us on social networks:
          </p>
          <div className="flex justify-center space-x-4 text-white">
            <FaFacebook
              size={24}
              className="hover:text-blue-500 hover:scale-125  cursor-pointer"
            />
            <FaGoogle
              size={24}
              className="hover:text-red-500 hover:scale-125 cursor-pointer"
            />
            <FaTiktok
              size={24}
              className="hover:text-pink-500 hover:scale-125  cursor-pointer"
            />
            <FaGithub
              size={24}
              className="hover:text-gray-400 hover:scale-125  cursor-pointer"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 py-8 border-t border-gray-700">
          <div>
            <h5 className="text-xl font-mono mb-2">Sun Solutions & Co.</h5>
            <p className="text-sm text-gray-400 max-w-md">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="text-lg font-mono mb-2">PRODUCTS</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Eurostar Sole</li>
                <li>Eurostar Fino</li>
                <li>Eco</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-mono mb-2">CONTACT</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>📍 Athens, Fedriadon 120, 113 64</li>
                <li>✉️ info@example.com</li>
                <li>📞 +30 6932462414</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 border-t border-gray-700 py-4">
          &copy; 2025 Copyrights
        </div>
      </footer>
    </>
  );
}

export default Footer;
