import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import img1 from './assets/img1.png';
import { Shuffle, CirclePlus, CircleArrowDown, Ellipsis, Search, TextQuote, Clock3, Play,ChevronLeft } from 'lucide-react'; // Import Play icon

export default function Playlist() {
    const { playlistId } = useParams(); // Extract playlist ID from the URL

    const playlistData = {
        1: {
            name: 'Chill Hits',
            description: 'Chill music for relaxing',
            img: img1,
            tracks: [
                { id: 1, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
                { id: 2, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
                { id: 3, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
                { id: 3, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
                { id: 3, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
                { id: 3, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
                { id: 3, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
            ],
        },
        2: {
            name: 'Party Mix',
            description: 'Music for dancing and having fun',
            img: img1,
            tracks: [
                { id: 1, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
                { id: 2, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: '18 Abril 2024', time: '3:10' },
            ],
        },
        3: {
            name: 'Focus',
            description: 'Music for concentrating',
            img: img1,
            tracks: [
                { id: 1, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: "18 Abril 2024", time: '3:10' },
                { id: 2, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: "18 Abril 2024", time: '3:10' },
                { id: 3, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: "18 Abril 2024", time: '3:10' },
            ],
        },
        4: {
            name: 'Workout',
            description: 'Music for exercising',
            img: img1,
            tracks: [
                { id: 1, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: "18 Abril 2024", time: '3:10' },
                { id: 2, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: "18 Abril 2024", time: '3:10' },
                { id: 3, albumImg: img1, title: 'EARQUAKE', artist: 'Tyler, The Creator', album: 'IGOR', addedby: 'Zé Carneiro', date_added: "18 Abril 2024", time: '3:10' },
            ],
        },
    };

    const playlist = playlistData[playlistId];

    // Handle case if playlist is not found
    if (!playlist) {
        return <div style={{color: 'white'}}>Playlist not found</div>;
    }

    const [hoveredTrack, setHoveredTrack] = useState(null); // State to track which track is hovered

    const handleMouseEnter = (trackId) => {
        setHoveredTrack(trackId);
    };

    const handleMouseLeave = () => {
        setHoveredTrack(null);
    };

    return (
        
        <div className="playlist-page">
            <div className="icon-div">
                        <ChevronLeft size={25} id="less-icon" />
                    </div>
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
                    <Search size={18} id="search-icon" />
                    <div className="custom-order">
                        <span>Custom order</span>
                        <TextQuote size={20} id="quote-icon" />
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
                    <div className="date-added">
                        <span>Date added</span>
                    </div>
                    <div className="clock">
                        <Clock3 size={20} id="clock-icon" />
                    </div>
                </div>
            </div>
            <div className="play-border"></div>

            <div className="list">
                {playlist.tracks.map((track) => (
                    <div
                        className="list-each"
                        key={track.id}
                        onMouseEnter={() => handleMouseEnter(track.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="track-line">
                            <div className="track">
                                <div className="id">
                                    {/* Show Play icon if hovered, otherwise show track.id */}
                                    {hoveredTrack === track.id ? (
                                        <i id="play-icon" className="bi bi-play-fill"></i>
                                    ) : (
                                        <span>{track.id}</span>
                                    )}
                                </div>
                                <div className="track-part">
                                    <div className="track-img">
                                        <img src={track.albumImg} alt="" />
                                    </div>
                                    <div className="track-name">
                                        <span>{track.title}</span>
                                        <span>{track.artist}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="album">
                                <span>{track.album}</span>
                            </div>
                            <div className="added">
                                <span>{track.addedby}</span>
                            </div>
                            <div className="added-date">
                                <span>{track.date_added}</span>
                            </div>
                            <div className="time">
                                <span>{track.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
