import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import { Link } from 'react-router-dom';
import './Songs.css';
import Userhome from "./Userhome";
import SongTile from "./SongsTile";
import SongInfo from "./SongInfo";
import SongPlayer from "./SongPlayer";


function Songs() {
  // State to store the selected song's information
  const [selectedSong, setSelectedSong] = React.useState(null);

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  const handleSongClose = () => {
    setSelectedSong(null);
  };

  return (
    <div className="songs-container">
      {/* Navigation bar */}
      <nav>
        <Link to="/login" className="navbar-brand">
        <FontAwesomeIcon icon={faSignOutAlt}  />

          <h6>&nbsp;Log Out</h6>
        </Link>
        <div className="nav-tex-wrapper">
        {/* <p><span></span>MUSIVIBES</p> */}
        </div>
        <span style={{ flexGrow: 1 }} />
        <Link to="/Userhome" className="navbar-brand">
        <FontAwesomeIcon icon={faHome}  />

          <h6 >&nbsp;Home</h6>
        </Link>
      </nav>

      {/* Body with Song Tiles */}
      <main>
        {/* Map through the songs and display SongTile components */}
        {songsData.map((song) => (
          <SongTile
            key={song.id}
            song={song}
            onClick={() => handleSongSelect(song)}
          />
        ))}
      </main>

      {/* Conditionally render the selected song's player or an empty div */}
      {selectedSong ? (
        <SongPlayer song={selectedSong} onClose={handleSongClose} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

const songsData = [
  {
    id: 1,
    name: "Kesariya",
    artist: "Arijit Singh",
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
  {
    id: 3,
    name: "Not Afraid",
    artist: "Eminem",
    image: "3.jpg",
    url: "Notafraid.mp3",
  },
  {
    id: 4,
    name: "Mohabbat Hai",
    artist: "Jeet Ganguli",
    image: "4.jpg",
    url: "Mohabbat_hai.mp3",
  },
  {
    id: 5,
    name: "Dhol Bajaa",
    artist: "Darshan Raval",
    image: "5.jpg",
    url: "Dhol_Bajaa.mp3",
  },
  {
    id: 6,
    name: "Bandeya Re Bandeya",
    artist: "Arijit Singh, Asees Kaur",
    image: "6.jpg",
    url: "bandeyarebandeya.mp3",
  },
  {
    id: 7,
    name: "Jannat Ve",
    artist: "Darshan Raval",
    image: "7.jpg",
    url: "JannatVe.mp3",
  },
  {
    id: 8,
    name: "Pehli Mohabbat",
    artist: "Darshan Raval",
    image: "8.jpg",
    url: "pehlimohabbat.mp3",
  },
  {
    id: 9,
    name: "Chaleya",
    artist: "Arijit Singh",
    image: "9.jpg",
    url: "chaleya.mp3",
  },
  {
    id: 10,
    name: "Teri Baato Mei Aisa Uljha Jiya",
    artist: "Raghav , Asees Kaur",
    image: "10.jpg",
    url: "Teribatonmeaisauljhajiya.mp3",
  },
  {
    id: 11,
    name: "Kar Har Maidaan Fateh",
    artist: "Sukhwinder Singh, Shreya Goshal",
    image: "11.jpg",
    url: "karharmaidanfateh.mp3",
  },
  {
    id: 12,
    name: "Baadal Pe Paaon Hai",
    artist: "Hema Sardesai",
    image: "12.jpg",
    url: "badalpepaaonhai.mp3",
  },
  {
    id: 13,
    name: "Girls Like To Swing",
    artist: "Sunidhi Chauhan",
    image: "13.jpg",
    url: "Girls Like To Swing Dil Dhadakne Do.mp3",
  },
  {
    id: 14,
    name: "Desh Mere",
    artist: "Arijit Singh",
    image: "14.jpg",
    url: "Desh Mere.mp3",
  },
  {
    id: 15,
    name: "Teri Mitti",
    artist: "B Praak",
    image: "15.jpg",
    url: "terimitti.mp3",
  },
  {
    id: 16,
    name: "Khalasi",
    artist: "Achint ,Aditya Gadhvi, Saumya Joshi",
    image: "16.jpg",
    url: "Khalasi.mp3",
  },
 


  // Add more songs data here
];

export default Songs;