import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import SongInfo from './SongInfo';
import { useParams } from 'react-router-dom';

function SongInfoPage() {
  const { selectedSong } = useContext(UserContext);
  const { songId } = useParams();

  if (selectedSong && selectedSong.id.toString() === songId) {
    return <SongInfo song={selectedSong} />;
  }

  return <div>Loading...</div>;
}

export default SongInfoPage;