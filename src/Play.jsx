import Player from "./Player";



export default function Play({accessToken, playingTrack}) {
    console.log("lllllll" + playingTrack);
    return (
       <div className="play-container">
        <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
       </div>
    );
}