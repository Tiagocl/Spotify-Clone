import React from 'react'
import {useHover} from 'react-use'
import {Dot} from 'lucide-react'

export default function TopResultSearch({ track, chooseTrack }) {

    

    const [hoverable, isHovered] = useHover((hovered) => (
        <div className="topsearch-container">
            <div className="top-img">
                <img src={track.albumUrl} alt="" />
            </div>
            
                <div className="track-title">
                    <div className="title">{track.title}</div>
                   
                    <div className="song-artist">
                    <div className="type">{track.type}</div>
                    <Dot size={20} id="dot-icon"/>
                    <div className="artist">{track.artist}</div>
                    </div>
                </div>
                
                 <div className={`lib-top ${hovered ? 'hovered' : '' }`}>
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div> 
                
            
        </div>
    ));
    return hoverable;
}
