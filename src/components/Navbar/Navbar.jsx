import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-950 shadow-md  w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="text-xl font-bold text-white">
            GoldSmith Softwares
          </div>

          <div className="hidden md:flex items-center space-x-8 ">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About</Link>
            <Link to="/services" className="text-white">Services</Link>
            <Link to="/blogs" className="text-white">Blog</Link>
            {/*Products*/}
            <div className="relative">
              <button className="text-white cursor-pointer"
               onClick={ () => setOpen(!open)}
              >
                Products
                <span 
                 className={` inline-block transform transition-transform duration-200 ${ open ? "rotate-180" : ""}`}
                 >
                  ▼
                </span>
              </button>

              {/* if its true, renders what's inside and if false, render nothing*/}
              { open && (
               <div className="absolute z-50 w-60 p-2 rounded-lg bg-blue-950 text-white">
                 <Link to="/wpenglish" className="px-4 block mt-3" onClick={ () => setOpen(!open)}>
                    WP English Only
                 </Link>
                 <Link className="px-4 block" onClick={ () => setOpen(!open)}>
                    WordPress
                 </Link>
                 <Link className="px-4 block" onClick={ () => setOpen(!open)}>
                    WordPress
                 </Link>
                 <Link className="px-4 block" onClick={ () => setOpen(!open)}>
                    WordPress
                 </Link>
               </div> 
              )}
            </div>
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
            <div className="flex flex-col">
              <button
                className="text-white flex justify-between items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                Products
                <span
                  className={`transform transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {open && (
                <div className="ml-4 mt-2 flex flex-col space-y-5 w-48">
                  <Link
                    to="/wpenglish"
                    className="text-white"
                    onClick={() => {
                      setOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    WP English Only
                  </Link>

                  <Link className="text-white">WordPress</Link>
                  <Link className="text-white">WordPress</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-white">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
