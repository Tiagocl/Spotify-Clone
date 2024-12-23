import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Side from "./Side";
import Play from "./Play";
import MusicComponent from "./InitialPage";
import Playlist from './PlayList';
import useAuth from '../auth/useAuth';
import Search from './Search';
import {useState} from 'react';

export default function MainPage({ code }) {
  const accessToken = useAuth(code);  // Only call useAuth once here
  const [playingTrack, setPlayingTrack] = useState(); 

  return (
    <Router>
      <div className="page">
        <Side accessToken={accessToken}/>
        <div className="music-content">
          <Routes>
            <Route path="/" element={<MusicComponent accessToken={accessToken} setPlayingTrack={setPlayingTrack}/>} />
            <Route path="/search" element={<Search accessToken={accessToken} setPlayingTrack={setPlayingTrack}/>} /> 
            <Route path="/playlist/:playlistId" element={<Playlist accessToken={accessToken} setPlayingTrack={setPlayingTrack} />} />
          </Routes>
        </div>
      </div>
      {accessToken &&  (
        
        <Play accessToken={accessToken} playingTrack={playingTrack} />
      )}
      
    </Router>
  );
}