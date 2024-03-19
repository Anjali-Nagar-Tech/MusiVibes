import React from 'react';
import { Link } from 'react-router-dom';
import './Userhome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faMusic,faUsers, faList } from '@fortawesome/free-solid-svg-icons';

function Userhome() {
  return (
    <div className="userhome-container">
        {/* <video autoPlay loop muted>
    <source src="bgvideo.mp4" type="video/mp4" />
    </video> */}
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/songs" className="nav-link">
            <FontAwesomeIcon icon={faMusic} />
            <span>Songs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/songs" className="nav-link">
            <FontAwesomeIcon icon={faUsers} />
            <span>Artists</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/songs" className="nav-link">
               <FontAwesomeIcon icon={faList} />
              <span>Playlists</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="landing-page">
        <div className="landing-tiles">
          <Link to="/songs" className="landing-tile">
            <img src="songs-tile.jpg" alt="Songs Tile" />
            <h3>Songs</h3>
            <p>Discover new songs and add them to your playlists</p>
          </Link>
          <Link to="/songs" className="landing-tile">
            <img src="artists-tile.jpg" alt="Artists Tile" />
            <h3>Artists</h3>
            <p>Explore the works of various artists and find new music</p>
          </Link>
          <Link to="/songs" className="landing-tile">
            <img src="playlists-tile.jpg" alt="Playlists Tile" />
            <h3>Playlists</h3>
            <p>Create and manage your own playlists</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Userhome;