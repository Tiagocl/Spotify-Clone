import { Dot} from 'lucide-react';
import PropTypes from 'prop-types';

export default function Playlist(props) {

    return(
        <>
            <div className="playlist-container">
                <div className="img">
                    <img src={props.img} alt="Playlist Image" />
                    </div>
                    <div className="name">
                        <div className="play-name">
                        <span id="name">{props.name}</span>
                        </div>
                        <div className="type">
                        <span>{props.ltype}</span>
                        <Dot size={20} id="icons" />
                        <span>{props.user}</span>
                        </div>
                    </div>
                </div>
        </>
    )
}


Playlist.propTypes= {
    img: PropTypes.string,
    name: PropTypes.string,
    ltype: PropTypes.string,
    user: PropTypes.string
}
