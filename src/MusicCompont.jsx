import { ChevronLeft, Bell, Users, CircleUserRound } from 'lucide-react';
import Button from './Button';
import PlaylistMain from './PlaylistMain';
import React, { useState } from 'react';
import PlaylistCard from './PlaylistCard';


export default function MusicComponent() {

    const [activeButton, setActiveButton] = useState(null);

    function handleButtonClick(name) {
        setActiveButton(name);
        console.log(activeButton);
    }

    return (
        <div className="music-container">
            <div className="fixed-container">
            <div className="top">
                <div className="icon-div">
                    <ChevronLeft size={25} id="less-icon" />
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
                <PlaylistMain img="src/assets/img1.png"
                    name="Chill"

                />
                <PlaylistMain img="src/assets/img1.png"
                    name="Chill"

                />
                <PlaylistMain img="src/assets/img1.png"
                    name="Chill"

                />
                <PlaylistMain img="src/assets/img1.png"
                    name="Chill"

                />

            </div>
            <div className="card-container">
            <div className="card-span">
                <span>Made For You</span>
            </div>
            <div className="cards">
                <PlaylistCard name="Daily Mix 1"
                    img="src/assets/img1.png"
                    artists="XXXTENTACION, Juice WRLD, Logic and more"
                />
                <PlaylistCard name="Daily Mix 2"
                    img="src/assets/img1.png"
                    artists="Nagalli, L7NNON, Pk and more"
                />
                <PlaylistCard name="Daily Mix 3"
                    img="src/assets/img1.png"
                    artists="Wet Bed Gand, Yuri NR5, LON3r JOHNY and more"
                />
                <PlaylistCard name="Daily Mix 4"
                    img="src/assets/img1.png"
                    artists="Litrox, Alcool Club, Dillaz and more"
                />

            </div>
            </div>
            <div className="card-container">
                <div className="card-span">
                    <span>
                        Recommended Stations
                    </span>
                <div className="cards">
                <PlaylistCard name="Greg Ferreira Radio"
                    img="src/assets/img1.png"
                    artists="With Jon Vlogs, Matt Fuze, MISAEL and more"
                />
                <PlaylistCard name="Pop Smoke Radio"
                    img="src/assets/img1.png"
                    artists="With Lil TJay, Polo G, Roddy Ricch and more"
                />
                <PlaylistCard name="Travis Scott Radio"
                    img="src/assets/img1.png"
                    artists="With will.i.am, Fergie, Timbaland and more"
                />
                <PlaylistCard name="21 Savage Radio"
                    img="src/assets/img1.png"
                    artists="With Metro Boomin, Gunna, Future and more"
                />
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}