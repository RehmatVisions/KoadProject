 import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../images/logo.png';
import Button from './subComp/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-24 md:w-32" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="group relative">
            <span className="cursor-pointer font-semibold">Home</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-3 space-y-2">
              <a className="block hover:text-orange-600">Home 1</a>
              <a className="block hover:text-orange-600">Home 2</a>
              <a className="block hover:text-orange-600">Home 3</a>
            </div>
          </div>

          <div className="group relative">
            <span className="cursor-pointer font-semibold">Menu</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-3 space-y-2">
              <a className="block hover:text-orange-600">Menu 1</a>
              <a className="block hover:text-orange-600">Menu 2</a>
              <a className="block hover:text-orange-600">Menu 3</a>
            </div>
          </div>

          <div className="group relative">
            <span className="cursor-pointer font-semibold">Pages</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-3 space-y-2">
              <a className="block hover:text-orange-600">Page 1</a>
              <a className="block hover:text-orange-600">Page 2</a>
              <a className="block hover:text-orange-600">Page 3</a>
            </div>
          </div>

          <div className="group relative">
            <span className="cursor-pointer font-semibold">News</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-3 space-y-2">
              <a className="block hover:text-orange-600">News 1</a>
              <a className="block hover:text-orange-600">News 2</a>
              <a className="block hover:text-orange-600">News 3</a>
            </div>
          </div>

          <div className="group relative">
            <span className="cursor-pointer font-semibold">Contact</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-3 space-y-2">
              <a className="block hover:text-orange-600">Email</a>
              <a className="block hover:text-orange-600">Phone</a>
              <a className="block hover:text-orange-600">Map</a>
            </div>
          </div>

          <Button text="Book A Table" />
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-6 pt-2 space-y-6">
          {['Home', 'Menu', 'Pages', 'News', 'Contact'].map((section) => (
            <div key={section}>
              <p className="font-semibold text-lg">{section}</p>
              <div className="ml-4 space-y-2 border-l-2 border-red-500 pl-3">
                <a className="block hover:text-orange-600">{section} Link 1</a>
                <a className="block hover:text-orange-600">{section} Link 2</a>
                <a className="block hover:text-orange-600">{section} Link 3</a>
              </div>
            </div>
          ))}

          {/* Mobile Button */}
          <div className="pt-2">
            <Button text="Book A Table" className="w-full justify-center py-2" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
