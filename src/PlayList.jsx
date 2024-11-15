import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import spotifyApi from './SpotifyApi';
import {ChevronLeft, Shuffle, CirclePlus, CircleArrowDown, Ellipsis, Search, TextQuote, Clock3, Play } from 'lucide-react';

export default function Playlist({chooseTrack}) {
    const { playlistId } = useParams();
    const [playlist, setPlaylistData] = useState({ name: '', description: '', img: '', tracks: [] });
    const [error, setError] = useState(null);
    const [hoveredTrack, setHoveredTrack] = useState(null);

    
    // Format duration from ms to "mm:ss"
    function formatDuration(durationMs) {
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    // Format date added to "dd MMM yyyy"
    function formatDateAdded(dateString) {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getUTCFullYear();
        return `${day} ${month} ${year}`;
    }

    // Fetch the playlist and track data
    useEffect(() => {
        async function fetchPlaylistData() {
            try {
                const response = await spotifyApi.getPlaylist(playlistId);
                console.log(response);
                const playlistInfo = {
                    name: response.body.name,
                    description: response.body.description,
                    img: response.body.images[0]?.url || '',
                    tracks: response.body.tracks.items.map(item => ({
                        id: item.track.id,
                        title: item.track.name,
                        duration: formatDuration(item.track.duration_ms),
                        artist: item.track.artists[0].name,
                        dateAdded: formatDateAdded(item.added_at),
                        added_by: item.added_by.id,
                        album: item.track.album.name,
                        albumImg: item.track.album.images[0]?.url || ''
                    }))
                };
                setPlaylistData(playlistInfo);
            } catch (err) {
                setError("Could not load playlist data.");
                console.error('Error fetching playlist:', err);
            }
        }
        fetchPlaylistData();
    }, [playlistId]);

    // Handle hover state
    const handleMouseEnter = (trackId) => setHoveredTrack(trackId);
    const handleMouseLeave = () => setHoveredTrack(null);

    if (error) {
        return <div style={{ color: 'white' }}>{error}</div>;
    }

    if (!playlist.tracks.length) {
        return <div style={{ color: 'white' }}>Loading...</div>;
    }

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

            <div className="list">
                {playlist.tracks.map((track, index) => (
                    <div
                        className="list-each"
                        key={track.id}
                        onMouseEnter={() => handleMouseEnter(track.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="track-line">
                            <div className="track">
                                <div className="id">
                                    {hoveredTrack === track.id ? (
                                        <i id="play-icon" className="bi bi-play-fill"></i>
                                    ) : (
                                        <span>{index + 1}</span> 
                                    )}
                                </div>
                                <div className="track-part">
                                    <div className="track-img">
                                        <img src={track.albumImg} alt={`${track.title} cover`} />
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
                            <div className="added_by">
                                <span>{track.added_by}</span>
                            </div>
                            <div className="date-added">
                                <span>{track.dateAdded}</span>
                            </div>
                            <div className="time">
                                <span>{track.duration}</span>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
