import React from "react";
import './Songs.css';

function SongInfo({ song }) {
  return (
    <div className="song-info">
      <img src={song.image} alt={song.name} className="song-image" />
      <h2>{song.name}</h2>
      <p>
        <strong>Artist:</strong> {song.artist}
      </p>
      <audio controls src={song.url} />
    </div>
  );
}

export default SongInfo;