import { Home, Search, Library, Plus, List } from 'lucide-react';
import Playlist from './Playlist';
import Button from './Button';
export default function Header() {
    return (

        <>
        <div className="side-container">
            <div className="search-container">
                <div className="inicio">
                    <a href="" className="header-a">
                        <Home size={25} id="icons" />
                        Home
                    </a>
                </div>
                <div className="procurar">
                    <a href="" className='header-a'>
                        <Search size={25} id="icons" />
                        Search
                    </a>
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
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
                                  name="Chill"
                                  ltype="Playlist"
                                  user="tiago"
                        />
                        <Playlist img="src/assets/img1.png"
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