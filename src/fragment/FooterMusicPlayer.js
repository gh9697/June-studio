import React, { useRef, useState, useEffect} from "react";
import "./FooterMusicPlayer.scss";

function FooterMusicPlayer({music}) {

    const [{musicName}, setCurrTrack] = useState(music);
    const audioElement = useRef();

    useEffect(() => {
        setCurrTrack(music);
    }, [music]);

    return (
        <div className="footer-player">
            <div className="playback-controls">
                <audio ref={audioElement} src={require("../music/" + musicName).default} controls autoPlay/>
            </div>
        </div>
    )
}

export default FooterMusicPlayer;