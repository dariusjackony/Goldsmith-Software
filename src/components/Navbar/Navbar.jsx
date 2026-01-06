import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 shadow-md  w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="text-xl font-bold text-white">
            GoldSmith Softwares
          </div>

          <div className="hidden md:flex items-center space-x-8 lg:text-xl">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About</Link>
            <Link to="/services" className="text-white">Services</Link>
            <Link to="/blogs" className="text-white">Blog</Link>
            <Link to="/" className="text-white">Product</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white font-bold text-2xl"
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden shadow-md relative">
          <div className="flex flex-col space-y-4  bg-blue-950 px-4 py-6 absolute w-full top-full left-0 z-50" onClick={ () => setIsOpen(!isOpen)}>
            <Link to="/" className="text-white" >Home</Link>
            <Link to="/about" className="text-white">About</Link>
            <Link to="/services" className="text-white">Services</Link>
            <Link to="/blogs" className="text-white">Blog</Link>
            <Link to="/" className="text-white">Product</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
