import React, { useState } from "react";
import "./SongPlayer.css";

function SongPlayer({ song, onClose }) {
  const [audio, setAudio] = useState(new Audio(song.url));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="song-player">
      <div className="song-player__content">
        <img src={song.image} alt={song.name} />
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
        <button onClick={handlePlayPauseClick}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <button className="song-player__close" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default SongPlayer;