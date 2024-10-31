import React,{useState} from 'react'
import {Ellipsis} from 'lucide-react'

export default function SearchResults({ track, chooseTrack }) {

  const [isHovered, setIsHovered] = useState(false); 


  function handlePlay() {
    chooseTrack(track)
  }
  return (
    <div className="searchresult-container" 
         onClick={handlePlay}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
    <img src={track.albumUrl} alt="" className="album-art" />
    
    <div className="track-info">
      <div className="track-title">
        <div className="title">{track.title}</div>
        <div className={isHovered ? "artist-hovered " : "artist"}>{track.artist}</div>
      </div>
      <div className="duration">{track.time}</div>
      {isHovered && (
        <div className="ellipsis-icon">
          <Ellipsis size={20} />
        </div>
      )}
    </div>
  </div>
  )
}
