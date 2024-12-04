import React from 'react'
import {useHover} from 'react-use'


export default function SearchPlaylists({playlist, choseTrack}) {

    const [hoverable, isHovered] = useHover((hovered) => (
    <div className='searchplaylist-container'>
            <div className='playlist-img'>
            <img src={playlist.playlistImage} alt='' className='artist-art' />
        </div>
        <div className='playlist-info'>
            <div className='playlist-name'>{playlist.name}</div>
            <div className="playlist-owner"> {playlist.owner}</div>
        </div>
        <div className={`lib-top ${hovered ? 'playlist-hover' : '' }`}>
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div> 
    </div>
    )
  )
  return hoverable;
}
