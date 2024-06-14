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
            <div className="made-for-you">
                <span>Made For You</span>
            </div>
            <div className="cards">
                <PlaylistCard name="Daily Mix 1"
                    img="src/assets/img1.png"
                    artists="XXXTENTACION, Juice WRLD, Logic and more"
                />
                <PlaylistCard name="Daily Mix 1"
                    img="src/assets/img1.png"
                    artists="XXXTENTACION, Juice WRLD, Logic and more"
                />
                <PlaylistCard name="Daily Mix 1"
                    img="src/assets/img1.png"
                    artists="XXXTENTACION, Juice WRLD, Logic and more"
                />
            </div>
            </div>
            </div>
        </div>
    )
}