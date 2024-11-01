import React,{useState} from 'react'
import {Ellipsis,CirclePlus} from 'lucide-react'

export default function SearchResults({ track, chooseTrack }) {

  const [isHovered, setIsHovered] = useState(false); 


  function handlePlay() {
    chooseTrack(track)
  }
  return (
    <div className="searchresult-container" 
         
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>

      <div className="track-img">
    <img src={track.albumUrl} alt="" className="album-art" />
    {isHovered && <div className="overlay"><i id="play-icon" className="bi bi-play-fill"></i></div>}
    </div>
    <div className="track-info">
      <div className="track-title">
        <div className="title">{track.title}</div>
        <div className={isHovered ? "artist-hovered " : "artist"}>{track.artist}</div>
      </div>
      <div className="hovered">
      {isHovered && (
        <div className="plus-icon">
          <CirclePlus size={17} />
        </div>
      )}
      <div className="duration">{track.time}</div>
      {isHovered && (
        <div className="ellipsis-icon">
          <Ellipsis size={20} />
        </div>
      )}
    </div>
    </div>
  </div>
  )
}
