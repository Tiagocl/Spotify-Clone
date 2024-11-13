import React from 'react'
import {useHover} from 'react-use'

export default function TopTracks({topTrack}) {

    const [hoverable, isHovered] = useHover((hovered) => (
    <div className='trackMain-container'>
        <div className='trackMain-img'>
            <img src={topTrack.topTrackImage} alt='' className='artist-art' />
        </div>
        <div className='trackMain-info'>
            <div className='trackMain-name'>{topTrack.name}</div>
            <div className="trackMain-artist">{topTrack.artist}</div>
        </div>
        <div className={`lib-top ${hovered ? 'trackMain-hover' : '' }`}>
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div> 
    </div>
    )
  )
  return hoverable;
}
