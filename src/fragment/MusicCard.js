import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Name from "./Name";
import playIcon from "../img/play-circle-filled-white.png";
import {setCurrentPlaying} from "../actions/action";
import "./MusicCard.scss";

function MusicCard(props) {
    const {name, img, author_name} = props.music;

    const [isHovered, setHovered] = useState(false);

    function handleResponse() {
        setHovered(!isHovered);
    }

    const dispatch = useDispatch();

    function handlePlay(e) {
        var allCard = document.querySelectorAll('.play-circle-img');
        for(var i=0;i < allCard.length; i++){
            if(allCard[i].style.visibility == "visible"){
                allCard[i].style.visibility = "hidden";
            };
        }
        e.target.querySelector('.play-circle-img').style.visibility = "visible";
        dispatch(setCurrentPlaying(props.music));
    }

    return (
        <div className="music-card">
            <div onClick={handlePlay} className="music-card-cover" onMouseOver={handleResponse}>
                <img className="music-poster" src={require("../img/" + img).default} alt={name}/>
                <div className="play-circle">
                    <img src={playIcon} alt="play"/>
                </div>
                <img className="play-circle-img" src={playIcon} alt="play" 
                    style={{height: "50px",width: "50px",position:"absolute", bottom: 0, visibility:"hidden"}}/>
            </div>
            <React.Fragment>
                <Name name={name} className="song-name" length={name.length}/>
                <Name name={author_name} className="author-name" length={author_name.length}/>
            </React.Fragment>
        </div>
    )
}
export default MusicCard;