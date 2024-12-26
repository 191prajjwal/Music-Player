import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-white bg-red-500 p-2 rounded-full focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

    
      <div
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-black text-white flex flex-col justify-between transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 z-40`}
      >
      
        <div>
       
          <div className="flex items-center px-6 py-4">
            <span className="text-red-500 text-3xl font-bold">🎵</span>
            <span className="text-2xl font-bold ml-2">
              <span className="text-red-500">Dream</span>
              <span className="text-white">Music</span>
            </span>
          </div>

         
          <div className="mt-12">
            <h2 className="text-gray-500 uppercase px-6 text-sm tracking-wider">Menu</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center px-6 py-2 text-red-500 hover:bg-gray-800 cursor-pointer rounded-lg">
                <span className="text-lg">🏠</span>
                <span className="ml-4">Home</span>
              </li>
              <li className="flex items-center px-6 py-2 text-red-500 hover:bg-gray-800 cursor-pointer rounded-lg">
                <span className="text-lg">📈</span>
                <span className="ml-4">Trends</span>
              </li>
              <li className="flex items-center px-6 py-2 text-red-500 hover:bg-gray-800 cursor-pointer rounded-lg">
                <span className="text-lg">📚</span>
                <span className="ml-4">Library</span>
              </li>
              <li className="flex items-center px-6 py-2 text-red-500 hover:bg-gray-800 cursor-pointer rounded-lg">
                <span className="text-lg">🔍</span>
                <span className="ml-4">Discover</span>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mb-10">
          <h2 className="text-gray-500 uppercase px-6 text-sm tracking-wider">General</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center px-6 py-2 text-red-500 hover:bg-gray-800 cursor-pointer rounded-lg">
              <span className="text-lg">⚙️</span>
              <span className="ml-4">Settings</span>
            </li>
            <li className="flex items-center px-6 py-2 text-red-500 hover:bg-gray-800 cursor-pointer rounded-lg">
              <span className="text-lg">🚪</span>
              <span className="ml-4">Log Out</span>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
