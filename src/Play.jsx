import Player from "./Player";



export default function Play({accessToken, playingTrack}) {
    return (
       <div className="play-container">
        <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
       </div>
    );
}