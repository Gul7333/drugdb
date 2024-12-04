"use client";

import Link from "next/link";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title/Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              DrugDB
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>


        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-3 py-2">
            <Link href="/" className="block py-2 px-4 bg-blue-500 rounded hover:bg-blue-400">
              Home
            </Link>
            <Link href="/about" className="block py-2 px-4 bg-blue-500 rounded hover:bg-blue-400">
              About
            </Link>
            <Link href="/contact" className="block py-2 px-4 bg-blue-500 rounded hover:bg-blue-400 ">
              Contact
            </Link>
          </div>
        )}
      </div>

    
    </nav>
  );
};

export default NavigationBar;
