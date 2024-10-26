import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Side from "./Side";
import Play from "./Play";
import MusicComponent from "./MusicComponent";
import Playlist from './PlayList';
import useAuth from './useAuth';
import Search from './Search';

export default function MainPage({ code }) {
  const accessToken = useAuth(code);  // Only call useAuth once here

  return (
    <Router>
      <div className="page">
        <Side />
        <div className="music-content">
          <Routes>
            <Route path="/" element={<MusicComponent />} />
            <Route path="/search" element={<Search accessToken={accessToken} />} /> {/* Pass accessToken */}
            <Route path="/playlist/:playlistId" element={<Playlist />} />
          </Routes>
        </div>
      </div>
      <Play />
    </Router>
  );
}
