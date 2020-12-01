import React, {useContext, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import MusicCardContainer from "../fragment/MusicCardContainer";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import "./css/Library.css";

function  Library(){
    const [currMusic, setCurrMusic] = useState(null);
    const {playing} = useSelector(state => state.musicReducer);

    useEffect(() => {
        setCurrMusic(playing)
    }, [playing])


    return (
        <div className="libraryContainer">
            <section className="home-music-container">
                <div className="main-home">
                    <MusicCardContainer/>
                </div>
            </section>
            <React.Fragment>
                {
                    currMusic
                        ?
                        <FooterMusicPlayer music={currMusic}/>
                        : (<></>)
                }
            </React.Fragment>
        </div>
    )
}

export default Library;