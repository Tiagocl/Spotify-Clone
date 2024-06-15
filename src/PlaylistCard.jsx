import PropTypes from 'prop-types';
import { useHover } from 'react-use';

export default function PlaylistCard(props) {
    const [hoverable, isHovered] = useHover((hovered) => (
        <div className="card">
            <div className={`card-img ${hovered ? 'hovered' : ''}`}
            style={{ position: hovered ? 'relative' : 'static' }}>
                <img src={props.img} alt="Playlist image" />
                <div className={`card-play ${hovered ? 'show' : ''}`}>
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div>
            </div>
            <div className="text-card">
                <div className="card-name">
                    <span>{props.name}</span>
                </div>
                <div className="artists">
                    <span>{props.artists}</span>
                </div>
            </div>
        </div>
    ));

    return hoverable;
}

// Add PropTypes definition
PlaylistCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.string.isRequired
};