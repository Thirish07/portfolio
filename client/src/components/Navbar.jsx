import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md relative">
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Thirisala G
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-gray-800 dark:text-white">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#internship" className="hover:text-blue-500">Internships</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform duration-200"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-400" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform duration-200"
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-800 dark:text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-col items-center space-y-4 py-4 z-50">
          <a onClick={() => setMenuOpen(false)} href="#home" className="hover:text-blue-500">Home</a>
          <a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-blue-500">About</a>
          <a onClick={() => setMenuOpen(false)} href="#education" className="hover:text-blue-500">Education</a>
          <a onClick={() => setMenuOpen(false)} href="#internship" className="hover:text-blue-500">Internships</a>
          <a onClick={() => setMenuOpen(false)} href="#skills" className="hover:text-blue-500">Skills</a>
          <a onClick={() => setMenuOpen(false)} href="#projects" className="hover:text-blue-500">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

