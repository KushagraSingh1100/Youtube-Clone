import { Link } from "react-router-dom";
const SearchCards = (props) => {
    return (
    <div className="search-video">
            <Link to = {`/player/${props.id}`}>
            <div className="search-thumbnail-length">
            <img className="search-thumbnail-image" src={props.thumbnail} alt=""/>
            <div className="search-video-length">{props.videoLength}</div>
            </div>
            <div className="search-video-info">
                <div className="search-pfp">
                <img className="search-channel-icon" src={props.channelpfp} alt="" />
                </div>
                <div className="search-video-title">
                {props.title}
                </div>
            </div>
            </Link>
            <div className="search-channel-name">
                <p>{props.channelName}</p>
                    
                    <div className="search-views">
                        {props.views} • {props.time}
                    </div>
            </div>
        </div>
    );
    }
export default SearchCards;