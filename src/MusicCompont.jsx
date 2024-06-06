import {ChevronLeft,Bell,Users,CircleUserRound } from 'lucide-react';
import Button from './Button';
import React, {useState} from 'react';


export default function MusicComponent() {

    const [activeButton, setActiveButton] = useState(null);

    function handleButtonClick(name) {
        setActiveButton(name);
        console.log(activeButton);
    }

    return (
        <div className="music-container">
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
    )
}