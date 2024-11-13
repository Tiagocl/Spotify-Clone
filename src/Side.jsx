import { Home, Search, Library, Plus, List } from 'lucide-react';
import PlaylistSide from './PlaylistSide';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import spotifyApi from './SpotifyApi';
import { useState,useEffect } from 'react';

export default function Side({ accessToken }) {
    const [userName, setUserName] = useState("");
    const [sidePlaylists, setSidePlaylists] = useState([]);

    const navigate = useNavigate();
    function handleSearchClick() {
        navigate(`/search`)
        console.log('clicked search')
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
            console.log(userPlaylists.body);
            console.log(userPlaylists.body);
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
                        ownerName: uplay.owner.display_name
                    };
                })
                .sort((a, b) => {
                    // Sort: owner first, then collaborative, then others
                    if (a.ownerId === me.body.id && b.ownerId !== me.body.id) return -1; // a is your own playlist
                    if (a.ownerId !== me.body.id && b.ownerId === me.body.id) return 1; // b is your own playlist
                    return 0; // No change in order if both are the same type
                });
                setSidePlaylists(sortedPlaylists);
                console.log(sortedPlaylists);
                
            }
        })
        .catch(err => console.error('Spotify API access error', err)); 
    
        return () => { cancel = true; }; // Not really necessary for this case
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
                    <a href="" className='lib-a'>
                        <Library size={25} id="lib-icon" />
                        Your Library
                    </a>
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
                        {sidePlaylists.map(side => (
                            <PlaylistSide side={side} key={side.uri} />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}