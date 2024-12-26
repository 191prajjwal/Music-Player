import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
  
      <Sidebar />

     
      <div className="flex-1 flex flex-col text-white">
        <Header />
      </div>
    </div>
  );
};

export default App;
