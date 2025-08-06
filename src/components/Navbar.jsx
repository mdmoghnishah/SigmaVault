import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/fluent-mdl2_market.png"; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on navigation
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full h-auto px-6 md:px-20 py-6 flex items-center justify-between bg-white shadow-black-40 shadow-md z-50">
      {/* Logo + Title */}
      <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
        <img src={Logo} alt="Logo" className="w-[44px] h-[40px]" />
        <div className="text-2xl font-bold bg-gradient-to-r from-[#0C2441] via-[#0C2441] to-[#06C752] bg-clip-text text-transparent">
          Sigma Vault
        </div>
      </Link>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 text-gray-700 font-bold">
        <li>
          <Link to="/investment-products" className="hover:text-blue-600">
            Investment Products
          </Link>
        </li>
        <li>
          <Link to="/portfolio-tracker" className="hover:text-blue-600">
            Portfolio Tracker
          </Link>
        </li>
        <li>
          <Link to="/market-insights" className="hover:text-blue-600">
            Market Insights
          </Link>
        </li>
        <li>
          <Link to="/calculator" className="hover:text-blue-600">
            Calculator
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <Link to="/get-started" className="hidden md:block">
        <button className="bg-[#D4B13E] text-white px-4 py-2 font-bold rounded-lg">
          Get Started
        </button>
      </Link>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-gray-700 font-bold">
            <li>
              <Link
                to="/investment-products"
                onClick={handleLinkClick}
                className="hover:text-blue-600"
              >
                Investment Products
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio-tracker"
                onClick={handleLinkClick}
                className="hover:text-blue-600"
              >
                Portfolio Tracker
              </Link>
            </li>
            <li>
              <Link
                to="/market-insights"
                onClick={handleLinkClick}
                className="hover:text-blue-600"
              >
                Market Insights
              </Link>
            </li>
            <li>
              <Link
                to="/calculator"
                onClick={handleLinkClick}
                className="hover:text-blue-600"
              >
                Calculator
              </Link>
            </li>
          </ul>
          <Link to="/get-started" onClick={handleLinkClick}>
            <button className="bg-[#D4B13E] text-white py-2 font-bold rounded-lg mt-2 w-full">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
