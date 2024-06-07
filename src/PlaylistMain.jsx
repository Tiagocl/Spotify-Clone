import { Dot } from 'lucide-react';
import PropTypes from 'prop-types';

export default function PlaylistMain(props) {

    return (
        <>
            <div className="main-playlist-container">
                <div className="img">
                    <img src={props.img} alt="Playlist Image" />
                </div>
                <div className="name">
                    <span id="name">{props.name}</span>
                </div>
            </div>
        </>
    )
}


PlaylistMain.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    ltype: PropTypes.string,
    user: PropTypes.string
}
