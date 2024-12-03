import { ChevronLeft, Bell, Users, CircleUserRound,Search } from 'lucide-react';
import Button from './Button';
import PlaylistRect from './PlaylistRect';
import React, { useEffect, useState } from 'react';
import PlaylistCard from './RecentlyPlayed';
import { useNavigate } from 'react-router-dom';
import spotifyApi from './SpotifyApi';
import RecentlyPlayed from './RecentlyPlayed';
import TopTracks from './TopTracks';

export default function MusicComponent({ accessToken,setPlayingTrack }) {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);
    const [userName, setUserName] = useState(""); 
    const [recentTracks, setRecentTracks] = useState([]); 
    const [top, setTopTracks] = useState([]); 
    const [userPlaylists, setUserPlaylists] = useState([]); 


    function handlePlayListClick(id) {
        navigate(`/playlist/${id}`);
        console.log("clicked Main Page playlist with id:", id);
    }

    function handleButtonClick(name) {
        setActiveButton(name);
        console.log(activeButton);
    }

    function handleSearchClick() {
        navigate(`/search`)
        console.log('clicked search')
    }

    function chooseTrack(track) {
        setPlayingTrack(track);
        console.log("track",track);
    }

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if (!accessToken) return;
    
        let cancel = false; 
        Promise.all([
        spotifyApi.getMe(),
        spotifyApi.getMyRecentlyPlayedTracks({limit: 4}),
        spotifyApi.getMyTopTracks(),
        ])
        .then(async([me,recent,topTrackRes]) => {
            if (cancel) return;

            const fetchedUserName = me.body.display_name;
            setUserName(fetchedUserName); 

            const recentTracks = recent.body.items.map(recent => {
                const biggestRecentImage = recent.track.album.images.reduce(
                    (biggest,image) => {
                        return image.height > biggest.height ? image : biggest;
                    },
                    recent.track.album.images[0]
                );
                return {
                    name : recent.track.name,
                    artist: 'By ' + recent.track.artists[0].name,
                    recentImage: biggestRecentImage.url,
                    uri:recent.track.uri
                }
            })
            setRecentTracks(recentTracks);
            

            const topTracks = topTrackRes.body.items.map(topTrack => {
                const biggestTopImage = topTrack.album.images.reduce(
                (biggest,image) => {
                    return image.height > biggest.height ? image : biggest;
                },
                topTrack.album.images[0]
                );
                return {
                    name: topTrack.name,
                    artist: topTrack.artists[0].name,
                    topTrackImage: biggestTopImage.url,
                    uri: topTrack.uri
                }
            })
            setTopTracks(topTracks);

            const userPlaylists = await spotifyApi.getUserPlaylists();
            if(!cancel) {
                const sortedPlaylists = userPlaylists.body.items.map(uplay => {
                    const biggestUserPlaylistImage = uplay.images.reduce(
                        (biggest,image) => {
                            return image.height > biggest.height ? image : biggest;
                        },
                        uplay.images[0]
                    );
                    return {
                        name: uplay.name,
                        uplaylistImage: biggestUserPlaylistImage.url,
                        uri: uplay.uri,
                        ownerId: uplay.owner.id,
                        playId: uplay.id,
                    };
                })
                .sort((a, b) => {
                    // Sort: owner first, then collaborative, then others
                    if (a.ownerId === me.body.id && b.ownerId !== me.body.id) return -1; // a is your own playlist
                    if (a.ownerId !== me.body.id && b.ownerId === me.body.id) return 1; // b is your own playlist
                    return 0; // No change in order if both are the same type
                });
                setUserPlaylists(sortedPlaylists);
                
            }
        })
        .catch(err => console.error('Spotify API access error', err)); 
    
        return () => { cancel = true; }; // Not really necessary for this case
    }, [accessToken]);

    return (
        <>
            <div className="fixed-container">
                <div className="top">
                <div className="procurar"
                onClick={() => handleSearchClick()}>
                        <Search size={25} id="icons" />
                        <span>Search</span>
                </div>
                    <div className="profile-icons">
                        <div className="bell">
                            <Bell size={20} id="pro-icon" />
                        </div>
                        <div className="people">
                            <Users size={20} id="pro-icon" />
                        </div>
                        <div className="pro">
                            <CircleUserRound size={20} id="pro-icon" />
                        </div>
                    </div>
                </div>

                <div className="categories">
                    <Button
                        name="All"
                        isActive={activeButton === "All"}
                        onClick={() => handleButtonClick("All")}
                    />
                    <Button
                        name="Music"
                        isActive={activeButton === "Music"}
                        onClick={() => handleButtonClick("Music")}
                    />
                    <Button
                        name="Podcasts"
                        isActive={activeButton === "Podcasts"}
                        onClick={() => handleButtonClick("Podcasts")}
                    />
                </div>
            </div>

            <div className="normal-container">
                <div className="playlist-main">
                   {userPlaylists.map((uplay,index) => (
                    <PlaylistRect userPlay={uplay} key={`${uplay.uri}-${index}`} onClick={() => handlePlayListClick(uplay.playId)}/>
                   ))}
                </div>

                 <div className="card-container">
                    <div className="card-span">
                        <span>Recently Played</span>
                    </div>
                    <div className="cards">
                       {recentTracks.map((track,index) => (
                        <RecentlyPlayed music={track} key={`${track.uri}-${index}`} chooseTrack={chooseTrack} />
                       ))}
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-span top-span">
                        <span>Top {userName} Tracks</span>
                    </div>
                    <div className="cards">
                       {top.slice(0,4).map((track,index) => (
                        <TopTracks topTrack={track} key={`${track.uri}-${index}`} chooseTrack={chooseTrack} />
                       ))}
                    </div>
                </div>
            </div>
        </>
    );
}
