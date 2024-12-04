import { Home, Search, Library, Plus, List } from 'lucide-react';
import PlaylistSide from '../components/PlaylistSide';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import spotifyApi from '../api/SpotifyApi';
import { useState,useEffect } from 'react';

export default function Side({ accessToken }) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [sidePlaylists, setSidePlaylists] = useState([]);

    
    function handleSearchClick() {
        navigate(`/search`)
        console.log('clicked search')
    }

    function handlePlayClick(id) {
        navigate(`/playlist/${id}`);
        console.log("clicked side playlist with id:", id);
    }

    function handleHomeCLick() {
        navigate(`/`)
        console.log('clicked home')
    }

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if (!accessToken) return;
    
        let cancel = false; 
       spotifyApi.getMe()

        .then(async me => {
            if (cancel) return;

            const fetchUserName = me.body.display_name;
            setUserName(fetchUserName);

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
                        type: 'Playlist',
                        ownerId: uplay.owner.id,
                        playId: uplay.id,
                        ownerName: uplay.owner.display_name
                    };
                })
                .sort((a, b) => {
                    
                    if (a.ownerId === me.body.id && b.ownerId !== me.body.id) return -1; 
                    if (a.ownerId !== me.body.id && b.ownerId === me.body.id) return 1; 
                    return 0; 
                });
                setSidePlaylists(sortedPlaylists);
                
            }
        })
        .catch(err => console.error('Spotify API access error', err)); 
    
        return () => { cancel = true; }; 
    }, [accessToken]);
    
    return (

        <>
        <div className="side-container">
            <div className="search-container">
                <div className="inicio">
                    <div href="" className="header-a"
                    onClick={() => handleHomeCLick()}>
                        <Home size={25} id="icons" />
                        <span>Home</span>
                    </div>
                </div>
                <div className="procurar"
                onClick={() => handleSearchClick()}>
                        <Search size={25} id="icons" />
                        <span>Search</span>
                </div>
            </div>

            <div className="lib-container">
                <div className="library">
                    <div className='lib-a'>
                        <Library size={25} id="lib-icon" />
                        <span>Your Library</span>
                    </div>
                    <Plus size={21} id="icons" />
                </div>
                <div className="side-buttons">
                    <Button name="Playlists" />
                    <Button name="Artists" />
                </div>
                <div className="playlist">
                    <div className="search">
                        <div className="search-icon">
                            <Search size={20} id="icons" />
                        </div>
                        <div className="list-icon">
                            <span>Recents</span>
                            <List size={20} id="list-icon" />
                        </div>
                    </div>
                    <div className="list-play">
                        {sidePlaylists.map((side,index) => (
                            <PlaylistSide side={side} key={`${side.uri}-${index}`} onClick={() => handlePlayClick(side.playId)}/>
                        ))}
                        
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}