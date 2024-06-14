import { Dot, Play } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import { useHover } from 'react-use';

export default function PlaylistMain(props) {
    // Use useHover to track hover state
    const [hoverable, isHovered] = useHover((hovered) => (

        <div className="main-playlist-container">
            <div className="img-name">
                <div className="img">
                    <img src={props.img} alt="Playlist Image" />
                </div>
                <div className="name">
                    <span id="name">{props.name}</span>
                </div>
            </div>
            {hovered && (
                <div className="lib">
                    <i id="play-icon" class="bi bi-play-fill"></i>

                </div>
            )}
        </div>
    ));

    return hoverable;
}

PlaylistMain.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    
}