import React from 'react'

export default function SearchResults({track, chooseTrack}) {
  return (
    <div className="searchresult-container">
        <img src={track.albumUrl} alt="" />
        <div className="track-title">
            <div>{track.title}</div>
            <div>{track.artist}</div>
        </div>
    </div>
  )
}
