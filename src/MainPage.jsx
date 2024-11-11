import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Side from "./Side";
import Play from "./Play";
import MusicComponent from "./MusicComponent";
import Playlist from './PlayList';
import useAuth from './useAuth';
import Search from './Search';
import {useState} from 'react';

export default function MainPage({ code }) {
  const accessToken = useAuth(code);  // Only call useAuth once here
  const [playingTrack, setPlayingTrack] = useState(); // Add state for playingTrack

  return (
    <Router>
      <div className="page">
        <Side />
        <div className="music-content">
          <Routes>
            <Route path="/" element={<MusicComponent accessToken={accessToken} />} />
            <Route path="/search" element={<Search accessToken={accessToken} setPlayingTrack={setPlayingTrack}/>} /> {/* Pass accessToken */}
            <Route path="/playlist/:playlistId" element={<Playlist />} />
          </Routes>
        </div>
      </div>
      {accessToken &&  (
        
        <Play accessToken={accessToken} playingTrack={playingTrack} />
      )}
      
    </Router>
  );
}