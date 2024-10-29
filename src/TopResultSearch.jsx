import React from 'react'
import {useHover} from 'react-use'

export default function TopResultSearch({ track, chooseTrack }) {

    function handlePlay() {
        chooseTrack(track)
    }

    const [hoverable, isHovered] = useHover((hovered) => (
        <div className="topsearch-container"
            onClick={handlePlay}>
                
            <div className="top-img">
                <img src={track.albumUrl} alt="" />
            </div>
            
                <div className="track-title">
                    <div className="title">{track.title}</div>
                    <div className="artist">{track.artist}</div>
                    <div className="type">{track.type}</div>
                </div>
                
                 <div className={`lib-top ${hovered ? 'hovered' : '' }`}>
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div> 
                
            
        </div>
    ));
    return hoverable;
}
