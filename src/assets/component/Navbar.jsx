 import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../images/logo.png';
import Button from './subComp/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 py-3 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="w-16 sm:w-20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-[16px] font-medium">

            {/* Home */}
            <div className="group relative cursor-pointer">
              <Link to="/" className="flex items-center hover:text-orange-600 transition-all">
                Home <RiArrowDropDownLine className="text-2xl" />
              </Link>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-xl border-t-2 border-red-500 mt-2 rounded-md min-w-[190px]">
                <a className="px-4 py-2 hover:text-orange-600">Home Link 1</a>
                <a className="px-4 py-2 hover:text-orange-600">Home Link 2</a>
                <a className="px-4 py-2 hover:text-orange-600">Home Link 3</a>
              </div>
            </div>

            {/* Menu */}
            <div className="group relative cursor-pointer">
              <Link to="/menu" className="flex items-center hover:text-orange-600 transition-all">
                Menu <RiArrowDropDownLine className="text-2xl" />
              </Link>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-xl border-t-2 border-red-500 mt-2 rounded-md min-w-[190px]">
                <a className="px-4 py-2 hover:text-orange-600">Menu Link 1</a>
                <a className="px-4 py-2 hover:text-orange-600">Menu Link 2</a>
                <a className="px-4 py-2 hover:text-orange-600">Menu Link 3</a>
              </div>
            </div>

            {/* Pages */}
            <div className="group relative cursor-pointer">
               <Link to="/pagee" className="flex items-center hover:text-orange-600 transition-all">
                Pages <RiArrowDropDownLine className="text-2xl" />
              </Link>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-xl border-t-2 border-red-500 mt-2 rounded-md min-w-[190px]">
                <a className="px-4 py-2 hover:text-orange-600">Pages Link 1</a>
                <a className="px-4 py-2 hover:text-orange-600">Pages Link 2</a>
                <a className="px-4 py-2 hover:text-orange-600">Pages Link 3</a>
              </div>
            </div>

            {/* News */}
            <div className="group relative cursor-pointer">
                <Link to="/news" className="flex items-center hover:text-orange-600 transition-all">
                News <RiArrowDropDownLine className="text-2xl" />
              </Link>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-xl border-t-2 border-red-500 mt-2 rounded-md min-w-[190px]">
                <a className="px-4 py-2 hover:text-orange-600">News Link 1</a>
                <a className="px-4 py-2 hover:text-orange-600">News Link 2</a>
                <a className="px-4 py-2 hover:text-orange-600">News Link 3</a>
              </div>
            </div>

            {/* Contacts */}
            <div className="group relative cursor-pointer">
              <Link to="/contact" className="flex items-center hover:text-orange-600 transition-all">
                Contacts <RiArrowDropDownLine className="text-2xl" />
              </Link>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-xl border-t-2 border-red-500 mt-2 rounded-md min-w-[190px]">
                <a className="px-4 py-2 hover:text-orange-600">Contact Link 1</a>
                <a className="px-4 py-2 hover:text-orange-600">Contact Link 2</a>
                <a className="px-4 py-2 hover:text-orange-600">Contact Link 3</a>
              </div>
            </div>

          </div>

          {/* Button */}
          <div className="hidden md:block">
            <Button text="Book A Table" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-6 pt-2 space-y-6">
          {/* Mobile Home */}
          <div>
            <p className="font-semibold text-lg">Home</p>
            <div className="ml-4 space-y-2 border-l-2 border-red-500 pl-3">
              <a className="block hover:text-orange-600">Home Link 1</a>
              <a className="block hover:text-orange-600">Home Link 2</a>
              <a className="block hover:text-orange-600">Home Link 3</a>
            </div>
          </div>

          {/* Same for Menu, Pages, News, Contacts... */}

          <div className="pt-2">
            <Button text="Book A Table" className="w-full justify-center py-2" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
