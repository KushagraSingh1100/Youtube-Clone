import { Link } from "react-router-dom";
const Cards = (props) => {
    return (
        <div className="video">
            <Link to = {`/player/${props.id}`}>
            <div className="thumbnail-length">
            <img className="thumbnail-image" src={props.thumbnail} alt=""/>
            <div className="video-length">{props.videoLength}</div>
            </div>
            <div className="video-info">
                <div className="pfp">
                <img className="channel-icon" src={props.channelpfp} alt="" />
                </div>
                <div className="video-title">
                {props.title}
                </div>
            </div>
            </Link>
            <div className="channel-name">
                <p>{props.channelName}</p>
                    
                    <div className="views">
                        {props.views} • {props.time}
                    </div>
            </div>
        </div>
    );
}
 
export default Cards;