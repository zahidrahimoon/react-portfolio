import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import arrowicon from "../assets/arrow-icon.png";
import moon from "../assets/moon_icon.png";
import sun from "../assets/sun_icon.png";
import menu from '../assets/menu-black.png';
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle theme mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class based on state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <nav className="font-playfair w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <img src={logo} className="w-28 cursor-pointer mr-14" alt="Logo" />
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:bg-gray-800 dark:text-white">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#mywork">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <button onClick={toggleTheme}>
            <img src={isDarkMode ? sun : moon} alt="Toggle theme" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-500 rounded-full ml-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ease-in-out"
          >
            Contact Us <img src={arrowicon} alt="arrow" className="w-3" />
          </a>
          <button onClick={toggleMenu} className="block md:hidden ml-3">
            <img src={menu} alt="menu-black" className="w-6" />
          </button>
        </div>
        <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </nav>
    </>
  );
};

export default Navbar;
