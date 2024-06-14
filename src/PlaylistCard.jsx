import PropTypes from 'prop-types'

export default function PlaylistCard(props) {

    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt="Playlist image" />
            </div>
            <div className="card-name">
                <span>{props.name}</span>
            </div>
            <div className="artistas">
                <span>{props.artists}</span>
            </div>
        </div>
    );
}

PlaylistCard.PropTypes
