import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/fluent-mdl2_market.png'; // make sure path is correct

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full h-auto px-6 md:px-20 py-6 flex items-center justify-between bg-white shadow-black-40 shadow-md z-50">
            {/* Logo + Title */}
            <Link to="/" className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-[44px] h-[40px]" />
                <div className="text-2xl font-bold bg-gradient-to-r from-[#0C2441] via-[#0C2441] to-[#06C752] bg-clip-text text-transparent">
                    Sigma Vault
                </div>
            </Link>


            {/* Hamburger Icon on Mobile */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex gap-10 text-gray-700 font-bold">
                <li className="hover:text-blue-600 cursor-pointer">
                    <Link to="/investment-products">Investment Products</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                    <Link to="/portfolio-tracker">Portfolio Tracker</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                    <Link to="/market-insights">Market Insights</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                    <Link to="/calculator">Calculator</Link>
                </li>
            </ul>


            {/* Desktop Button */}
            <button className="hidden md:block bg-[#D4B13E] text-white px-4 py-2 font-bold rounded-lg">
                Get Started
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-[100%] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-50">
                    <ul className="flex flex-col gap-4 text-gray-700 font-bold">
                        <li className="hover:text-blue-600 cursor-pointer">Investment Products</li>
                        <li className="hover:text-blue-600 cursor-pointer">Portfolio Tracker</li>
                        <li className="hover:text-blue-600 cursor-pointer">Market Insights</li>
                        <li className="hover:text-blue-600 cursor-pointer">Calculator</li>
                    </ul>
                    <button className="bg-[#D4B13E] text-white py-2 font-bold rounded-lg mt-2">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
