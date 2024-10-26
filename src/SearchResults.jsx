import React from 'react'

export default function SearchResults({track, chooseTrack}) {

  function handlePlay() {
    chooseTrack(track)
  }
  return (
    <div className="searchresult-container"
    onClick={handlePlay}>
        <img src={track.albumUrl} alt="" />
        <div className="track-title">
            <div>{track.title}</div>
            <div>{track.artist}</div>
        </div>
    </div>
  )
}
