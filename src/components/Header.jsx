import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
      
        <button
          className="text-white bg-red-500 p-2 rounded-full md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

      
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-red-500 font-semibold hover:text-white">
            Music
          </a>
          <a href="#" className="text-gray-400 hover:text-white">Podcast</a>
          <a href="#" className="text-gray-400 hover:text-white">Live</a>
          <a href="#" className="text-gray-400 hover:text-white">Radio</a>
        </nav>

   
        <div className="flex-1 md:flex md:justify-end">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-56 lg:w-64 bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-500"
            />
            <span className="absolute right-3 top-2.5 text-gray-400 text-lg cursor-pointer hover:text-red-500">
              🔍
            </span>
          </div>
        </div>
      </div>

      
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 text-white px-4 py-2 space-y-2">
          <a href="#" className="block hover:text-red-500">
            Music
          </a>
          <a href="#" className="block hover:text-red-500">
            Podcast
          </a>
          <a href="#" className="block hover:text-red-500">
            Live
          </a>
          <a href="#" className="block hover:text-red-500">
            Radio
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
