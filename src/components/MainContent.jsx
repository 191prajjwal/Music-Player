import React from "react";
import MusicPlayer from "./MusicPlayer";

const MainContent = ({ onSongSelect, currentSong }) => {
  // Mock song list
  const songs = [
    { id: 1, title: "Billie Jean", artist: "Michael Jackson" },
    { id: 2, title: "Beat It", artist: "Michael Jackson" },
    { id: 3, title: "Thriller", artist: "Michael Jackson" },
    { id: 4, title: "Smooth Criminal", artist: "Michael Jackson" },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white">
      {/* Main Content Header */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-white">Playlist</h2>
      </div>

      {/* Song List */}
      <div className="flex-1 overflow-y-auto px-6">
        <ul className="space-y-4">
          {songs.map((song) => (
            <li
              key={song.id}
              className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg cursor-pointer flex items-center justify-between"
              onClick={() => onSongSelect(`${song.title} - ${song.artist}`)}
            >
              <div>
                <p className="font-semibold text-lg">{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
              <span className="text-sm bg-gray-600 text-white px-3 py-1 rounded-full">
                Play
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Music Player */}
      <div className="mt-auto">
        <MusicPlayer currentSong={currentSong} />
      </div>
    </div>
  );
};

export default MainContent;
