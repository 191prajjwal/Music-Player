import React from "react";

const MusicPlayer = ({ currentSong }) => {
  return (
    <div className="bg-gray-900 text-white p-4 w-full flex items-center justify-between border-t border-gray-700">
    
      <div className="flex items-center">
        <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 mr-4">
          🎵
        </div>
        <div>
          <p className="font-semibold text-lg">{currentSong || "Select a song to play"}</p>
          <p className="text-sm text-gray-400">Now Playing</p>
        </div>
      </div>

   
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
          ⏮️
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
          ▶️
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
          ⏭️
        </button>
      </div>

    
      <div className="flex items-center space-x-2">
        <p className="text-sm text-gray-400">Volume</p>
        <input
          type="range"
          className="w-24 bg-gray-600"
          min="0"
          max="100"
          defaultValue="50"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
