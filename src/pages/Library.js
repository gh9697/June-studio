import React, {useContext, useEffect, useState} from "react";
import MusicCardContainer from "../fragment/MusicCardContainer";
import "./css/Library.css";

function  Library(){
    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    const [Page, setCurrPage] = useState(<MusicCardContainer/>);

    return (
        <div className="libraryContainer">
            <section className="home-music-container">
                <div className="main-home">
                    <MusicCardContainer/>
                </div>
            </section>
        </div>
    )
}

export default Library;