import { Home, Search, Library, Plus, List } from 'lucide-react';
import PlaylistSide from './PlaylistSide';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();
    

    function handleSearchClick() {
        navigate(`/search`)
        console.log('clicked search')
    }

    function handleHomeCLick() {
        navigate(`/`)
        console.log('clicked home')
    }
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
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <PlaylistSide img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}