import React from 'react'
import {useHover} from 'react-use'
export default function ({artist}) {

    const [hoverable, isHovered] = useHover((hovered) => (
    <div className='artist-container'>
        <div className='artist-img'>
            <img src={artist.artistImage} alt='' className='artist-art' />
        </div>
        <div className='artist-info'>
            <div className='artist-name'>{artist.artist}</div>
            <div className="artist-type">{artist.type}</div>
        </div>
        <div className={`lib-top ${hovered ? 'artist-hovered' : '' }`}>
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div> 
    </div>
    )
  )
  return hoverable;
}
