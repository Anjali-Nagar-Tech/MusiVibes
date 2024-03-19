import React from 'react'
import { useState, useEffect } from 'react';
import './homestyle.css';
import { Link } from 'react-router-dom';

function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="background">
        <img src="/bg.jpg" alt="Background" />
      </div>
      <div className="content">
        <div className={`intro ${showText ? 'show' : ''}`}>
          <h1>Welcome to MusiVibes</h1>
          <p>Discover, play and share your favorite music</p>
          <Link to="/register" className="get-started">Get Started</Link>
        </div>
        
     </div>
    </div>
    
  );
}



export default Home;