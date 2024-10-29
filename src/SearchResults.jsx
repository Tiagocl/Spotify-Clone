import React from 'react'

export default function SearchResults({ track, chooseTrack }) {

  function handlePlay() {
    chooseTrack(track)
  }
  return (
    <div className="searchresult-container" onClick={handlePlay}>
    <img src={track.albumUrl} alt="" className="album-art" />
    
    <div className="track-info">
      <div className="track-title">
        <div className="title">{track.title}</div>
        <div className="artist">{track.artist}</div>
      </div>
      <div className="duration">{track.time}</div>
    </div>
  </div>
  )
}
