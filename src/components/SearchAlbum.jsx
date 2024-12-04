import React from 'react'
import {useHover} from 'react-use'
import {Dot} from 'lucide-react'

export default function ({album, choseTrack}) {

    const [hoverable, isHovered] = useHover((hovered) => (
    <div className='album-container'>
        <div className='album-img'>
            <img src={album.albumImage} alt='' className='artist-art' />
        </div>
        <div className='album-info'>
            <div className='album-name'>{album.album}</div>
            <div className="date-name">
            <div className="album-date">{album.releaseYear}</div>
            <Dot size={20} id="dot-icon"/>
            <div className="album-artist">{album.artist}</div>
            </div>
        </div>
        <div className={`lib-top ${hovered ? 'album-hover' : '' }`}>
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div> 
    </div>
    )
  )
  return hoverable;
}
