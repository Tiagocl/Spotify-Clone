import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Side from "./Side"
import Play from "./Play"
import MusicComponent from "./MusicComponent"
import Playlist from './PlayList';

function App() {

 
  return (
    
    <>
    <Router>
    <div className="page">
      <Side />
      <div className="music-content">
        <Routes>
          {/* Default route, shows the main music component */}
          <Route path="/" element={<MusicComponent />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
        </Routes>
      </div>
    </div>
      <Play/>
      </Router>
    </>
  )
}

export default App
