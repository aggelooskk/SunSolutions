import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-8 font-sans">
        <div className="text-center mb-6">
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
            <h5 className="text-xl font-mono mb-2 hover:text-orange-400 transition-colors duration-200">
              Sun Solutions Co.
            </h5>
            <p className="text-md font-sans text-gray-400 max-w-md hover:text-orange-400 transition-colors duration-200">
              Φυσική ενέργεια, φυσική επιλογή. Ηλιακοί θερμοσίφωνες με υπογραφή
              ποιότητας.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="text-lg font-mono mb-2  hover:text-orange-400 transition-colors duration-200">
                PRODUCTS
              </h5>
              <ul className="space-y-1 text-md font-sans text-gray-300">
                <li>
                  <Link
                    to="/eurostar"
                    className="underline hover:text-orange-400 transition-colors duration-200 font-sans"
                  >
                    Eurostar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fino"
                    className=" underline hover:text-orange-400 transition-colors duration-200 font-sans"
                  >
                    Fino
                  </Link>
                </li>
                <li>
                  <Link
                    to="/eco"
                    className="underline hover:text-orange-400 transition-colors duration-200 font-sans"
                  >
                    Eco
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-mono mb-2 hover:text-orange-400 transition-colors duration-200">
                CONTACT
              </h5>
              <ul className="space-y-1 text-sm font-sans text-gray-300">
                <li className=" hover:text-orange-400 transition-colors duration-200 font-sans">
                  📍 Athens, Fedriadon 120, 113 64
                </li>
                <li className="hover:text-orange-400 transition-colors duration-200 font-sans">
                  ✉️ info@example.com
                </li>
                <li className="hover:text-orange-400 transition-colors duration-200 font-sans">
                  📞 +30 693 246 2414
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center  text-sm font-sans text-gray-500 border-t border-gray-700 p-1">
          <div>
            {" "}
            <p className="hover:text-orange-400 transition-colors duration-200 mb-0">
              &copy; 2025 Copyrights
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center text-sm font-sans text-gray-500 border-gray-700 p-2">
          <Link to="/terms&conditions">
            <span className="underline hover:text-orange-400 transition-colors duration-200 ml-2">
              Terms and Conditions
            </span>
          </Link>
          <Link to="/cookiepolicy">
            <span className="underline hover:text-orange-400 transition-colors duration-200 ml-2">
              Cookie Policy
            </span>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
