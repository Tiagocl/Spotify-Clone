import Player from "./Player";



export default function Play({accessToken, playingTrack}) {
    console.log(playingTrack);
    return (
       <div className="play-container">
        <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
       </div>
    );
}