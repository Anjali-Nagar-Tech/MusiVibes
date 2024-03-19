import React, { useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import SongsTile from './SongsTile';
import { useParams } from 'react-router-dom';

function SongTilePage() {
  const { setSelectedSong } = useContext(UserContext);
  const { songId } = useParams();
  const songsData = [
    {
      id: 1,
      name: "Kesariya",
      artist: "Aijit Singh",
      image: "1.jpg",
      url: "kesariya.mp3",
    },
    {
      id: 2,
      name: "Raatan Lambiyan",
      artist: "Jubin Nautiyal , Asees Kaur",
      image: "2.jpg",
      url: "Raatan_Lambiyan.mp3",
    },
    // Add more songs data here
  ];

  useEffect(() => {
    const song = songsData.find(s => s.id.toString() === songId);
    if (song) {
      setSelectedSong(song);
    }
  }, [songId, setSelectedSong]);

  return <SongsTile song={songsData.find(s => s.id.toString() === songId)} />;
}

export default SongTilePage;