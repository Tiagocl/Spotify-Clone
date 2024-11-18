import { Dot} from 'lucide-react';
import PropTypes from 'prop-types';

export default function PlaylistSide({side, onClick}) {
    return (
        <div className="playlist-container" onClick={onClick}>
            <div className="img">
                <img src={side.uplaylistImage} alt="Playlist Image" />
            </div>
            <div className="name">
                <div className="play-name">
                    <span id="name">{side.name}</span>
                </div>
                <div className="type">
                    <span>{side.type}</span>
                    <Dot size={20} id="icons" />
                    <span id="owner-span">{side.ownerName}</span>
                </div>
            </div>
        </div>
    );
}
