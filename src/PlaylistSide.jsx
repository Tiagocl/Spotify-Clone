import { Dot} from 'lucide-react';
import PropTypes from 'prop-types';

export default function PlaylistSide({ img, name, ltype, user }) {
    return (
        <div className="playlist-container">
            <div className="img">
                <img src={img} alt="Playlist Image" />
            </div>
            <div className="name">
                <div className="play-name">
                    <span id="name">{name}</span>
                </div>
                <div className="type">
                    <span>{ltype}</span>
                    <Dot size={20} id="icons" />
                    <span>{user}</span>
                </div>
            </div>
        </div>
    );
}

// Define PropTypes
PlaylistSide.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    ltype: PropTypes.string,
    user: PropTypes.string,
};

