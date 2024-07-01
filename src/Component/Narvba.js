import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed  top-0 left-0 w-full bg-indigo-950 text-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Zephrinus | Ezeji</div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#hero" className="block mt-4 text-indigo-300  lg:inline-block lg:mt-0 mx-2 hover:text-gray-200">Home</a>
          <a href="#about" className="block mt-4 text-indigo-300   lg:inline-block lg:mt-0 mx-2 hover:text-gray-200">About</a>
          <a href="#work" className="block mt-4 text-indigo-300   lg:inline-block lg:mt-0 mx-2 hover:text-gray-200">Work</a>
          <a href="#projects" className="block mt-4 text-indigo-300   lg:inline-block lg:mt-0 mx-2 hover:text-gray-200">Projects</a>
          <a href="#contact" className="block mt-4 text-indigo-300   lg:inline-block lg:mt-0 mx-2 hover:text-gray-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
