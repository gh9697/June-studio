import MusicCard from "./MusicCard";
import {useSelector} from "react-redux";
import "./MusicCardContainer.scss";

function MusicCardContainer() {
    const {playlists} = useSelector(state => state.musicReducer);
    return (
        <div className="music-card-container">
            {
                playlists.map(item => (
                    <MusicCard key={item.id} music={item}/>
                ))
            }
        </div>
    )
}
export default MusicCardContainer;