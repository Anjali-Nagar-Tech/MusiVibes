import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Userhome from './Userhome';
import Songs from './Songs';
import SongTilePage from './SongTilePage';
import SongInfoPage from './SongInfoPage';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/userhome' element={<Userhome/>} />
          <Route path='/songs/*' element={<Songs/>} />
          <Route path=":songId" element={<SongTilePage />} />
            <Route path=":songId/info" element={<SongInfoPage />} />
          
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;