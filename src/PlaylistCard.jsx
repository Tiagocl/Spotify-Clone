import PropTypes from 'prop-types';
import { useHover } from 'react-use';

export default function PlaylistCard({ img, name, artists }) {
    const [hoverable, isHovered] = useHover((hovered) => (
        <div className="card">
            <div className={`card-img ${hovered ? 'hovered' : ''}`}>
                <img src={img} alt="Playlist image" />
                <div className="card-play">
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div>
            </div>
            <div className="text-card">
                <div className="card-name">
                    <span>{name}</span>
                </div>
                <div className="artists">
                    <span>{artists}</span>
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
