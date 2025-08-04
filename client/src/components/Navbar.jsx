import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Thirisala G
      </h1>

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
    </nav>
  );
};

export default Navbar;
