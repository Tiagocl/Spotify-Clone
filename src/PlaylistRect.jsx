import { Dot, Play } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import { useHover } from 'react-use';

export default function PlaylistRect({ img, name, onClick }) {
    // Use useHover to track hover state
    const [hoverable, isHovered] = useHover((hovered) => (
        <div className="main-playlist-container" onClick={onClick}>
            <div className="img-name">
                <div className="img">
                    <img src={img} alt="Playlist Image" />
                </div>
                <div className="name">
                    <span id="name">{name}</span>
                </div>
            </div>
            {hovered && (
                <div className="lib">
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div>
            )}
        </div>
    ));

    return hoverable;
}

// Define PropTypes
PlaylistRect.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func, // Prop type definition for onClick
};

