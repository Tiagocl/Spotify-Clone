import { useParams} from 'react-router-dom';
import React from 'react';
import img1 from './assets/img1.png';
import {Shuffle,CirclePlus,CircleArrowDown,Ellipsis,Search,TextQuote,Clock3} from 'lucide-react';

export default function Playlist() {
    const {playlistId} = useParams(); //extract playlist ID from the URL


    const platlistData = {
        1: {
            name: 'Chill Hits',
            description: 'Chill music for relaxing',
            img: img1,
            tracks: [
                { id:1,album:img1, title: 'EARQUAKE', artist: 'Artist 1' },
                { id:2,album:img1, title: 'Track 2 - Soft Wind', artist: 'Artist 2' },
                { id:3,album:img1, title: 'Track 3 - Quiet Forest', artist: 'Artist 3' },  
            ],
        },
        2: {
            name: 'Party Mix',
            description: 'Music for dancing and having fun',
            img: img1,
            tracks: [
                { id:1,album:img1,  title: 'Track 1 - Dance Floor', artist: 'Artist 1' },
                { id:2,album:img1, title: 'Track 2 - Party Time', artist: 'Artist 2' },
                { id:3,album:img1, title: 'Track 3 - Celebration', artist: 'Artist 3' },  
            ],
        },
        3: {
            name: 'Focus',
            description: 'Music for concentrating',
            img: img1,
            tracks: [
                { id:1,album:img1, title: 'Track 1 - Deep Thoughts', artist: 'Artist 1' },
                { id:2,album: img1, title: 'Track 2 - Brain Power', artist: 'Artist 2' },
                { id:3,album:img1, title: 'Track 3 - Study Time', artist: 'Artist 3' },  
            ],
        },
        4: {
            name: 'Workout',
            description: 'Music for exercising',
            img: img1,
            tracks: [
                { id:1, album: img1, title: 'Track 1 - Warm Up', artist: 'Artist 1' },
                { id:2, album: img1, title: 'Track 2 - Cardio', artist: 'Artist 2' },
                { id:3, album: img1, title: 'Track 3 - Cool Down', artist: 'Artist 3' },  
            ],
        },
        };

    const playlist = platlistData[playlistId];

    //handle case if playlist is not found
    if(!playlist){
        return <div>Playlist not found</div>;
    }

    return(
        <div className="playlist-page">
            <div className="header-playlist">
                <div className="play-img">
            <img src={playlist.img} alt={`${playlist.name} Image`} />
            </div>
            <div className="play-title">
            <h1>{playlist.name}</h1>
            <p>{playlist.description}</p>
            </div>
            </div>
            <div className="playlist-icons">
            <div className="left">
            <div className="play-lib">
                    <i id="play-icon" className="bi bi-play-fill"></i>
                </div>
            <Shuffle size={30} id="shuffle-icon" />
            <CirclePlus size={30} id="add-icon" />
            <CircleArrowDown size={30} id="down-icon" />
            <Ellipsis size={30} id="more-icon" />
            </div>
            <div className="right">
            <Search size={25} id="search-icon" />
            <div className="custom-order">
            <span>Custom order</span>
            <TextQuote size={25} id="quote-icon" />
            </div>
            </div>
            </div>

            <div className="track-list">
                <div className="little-header-play">
                    <div className="hashtag">
                        <span>#</span>
                        <span>Title</span>
                    </div>
                    <div className="album">
                        <span>Album</span>
                    </div>
                    <div className="added">
                        <span>Added by</span>
                    </div>
                    <div className="clock">
                        <Clock3 size={25} id="clock-icon"/>
                    </div>
                    </div>
                    <div className="play-border">

                    </div>

                <ul id="play-ul">
                    {playlist.tracks.map((track) => (
                        <li key={track.id}>
                            <div className="track">
                            <div className="id">
                                <span>{track.id}</span>
                            </div>
                            <div className="track-part">
                                <div className="track-img">
                                    <img src={track.album} alt="" />
                                </div>
                                <div className="track-name">
                                    <span>{track.title}</span>
                                    <span>{track.artist}</span>
                                </div>
                                </div>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}