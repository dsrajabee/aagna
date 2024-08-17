// import React, { useState } from 'react';
import Image from "next/image";


const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

  return (
   <>
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={120}
            className="rounded-lg"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-[#FFC807] font-bold">Home</a>
          <a href="/about" className="text-white">About us</a>
          <a href="/ourdesign" className="text-white">Our Design Process</a>
          <a href="/services" className="text-white">Services</a>
          <a href="/works" className="text-white">Works</a>
          <a href="/blog" className="text-white">Blog</a>
          <a href="/contact" className="text-white">Contact us</a>
        </nav>
        <div className="md:hidden flex items-center">
          {/* Hamburger menu icon (you can use an icon library or custom SVG) */}
          <button
            className="text-white focus:outline-none"
            // onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {/* {isOpen && ( */}
        <nav className="md:hidden bg-gray-800 p-2">
          <div className="flex flex-col space-y-2">
            <a href="/" className="block text-[#FFC807] font-bold">Home</a>
            <a href="/about" className="block text-white">About us</a>
            <a href="/ourdesign" className="block text-white">Our Design Process</a>
            <a href="/services" className="block text-white">Services</a>
            <a href="/works" className="block text-white">Works</a>
            <a href="/blog" className="block text-white">Blog</a>
            <a href="/contact" className="block text-white">Contact us</a>
          </div>
        </nav>
      {/* )} */}
    </header>
   </>
  );
};

export default Navbar;