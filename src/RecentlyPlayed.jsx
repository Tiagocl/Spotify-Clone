import React from 'react'
import {useHover} from 'react-use'

export default function RecentlyPlayed({music, chooseTrack}) {

    function handlePlay() {
        chooseTrack(music);
    }

    const [hoverable, isHovered] = useHover((hovered) => (
    <div className='trackMain-container'
    onClick={handlePlay}>
        <div className='trackMain-img'>
            <img src={music.recentImage} alt='' className='artist-art' />
        </div>
        <div className='trackMain-info'>
            <div className='trackMain-name'>{music.name}</div>
            <div className="trackMain-artist">{music.artist}</div>
        </div>
        <div className={`lib-top ${hovered ? 'trackMain-hover' : '' }`}>
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div> 
    </div>
    )
  )
  return hoverable;
}
