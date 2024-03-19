import React, { useState } from "react";
import './SongTile.css';

function SongsTile({ song, onClick }) {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    onClick(song);
    if (audio && !isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="song-tile" onClick={handleClick}>
      <img src={song.image} alt={song.name} />
      <h3>{song.name}</h3>
      <p>{song.artist}</p>
      {audio && (isPlaying ? (
        <button>Pause</button>
      ) : (
        <button>Play</button>
      ))}
    </div>
  );
}

export default SongsTile;