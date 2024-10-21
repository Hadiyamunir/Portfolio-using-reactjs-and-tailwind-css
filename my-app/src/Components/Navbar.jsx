import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-black p-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-pink-700 text-2xl font-bold">
            <h2>Portfolio</h2>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white">
            {isOpen ? 'Close' : 'Menu'}
          </button>

          {/* desktop */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#home"
               className="text-white text-md hover:text-pink-700">
                Home
              </a></li>
            <li>
              <a href="#about"
                className="text-white text-md hover:text-pink-700">
                About
              </a></li>
            <li>
              <a href="#project"
                className="text-white text-md hover:text-pink-700">
                Projects
              </a></li>
            <li>
              <a href="#contact"
                className="text-white text-md hover:text-pink-700">
                Contact
              </a></li>
          </ul>
        </div>

        {/* mobile links */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <li>
              <a href="#home"
                className="text-white text-md hover:text-pink-700">
                Home
              </a></li>
            <li>
              <a href="#about"
                className="text-white text-md hover:text-pink-700">
                About
              </a></li>
            <li>
              <a href="#project"
                className="text-white text-md hover:text-pink-700">
                Projects
              </a></li>
            <li>
              <a href="#contact"
                className="text-white text-md hover:text-pink-700">
                Contact
              </a></li>
          </ul>
        )}
      </nav>
      <div className="mt-16"></div>
    </>
  );
};

export default Navbar;
