import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import FetchData from "../utils/FetchData"
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import Card from "./Cards";

const Player = () => {
    
    const [videoDetails, setvideoDetails] = useState([]);
    const [Comments, setComments] = useState([]);
    const [isPending, setisPending] =useState(true);
    const [showMore, setshowMore] = useState(true);
    const [rightVideoDetails, setrightVideoDetails] = useState([]);
    
    const {id} = useParams();
    
    useEffect(()=>{
        FetchData(`video/info?id=${id}`).then((data=>{setvideoDetails(data);setisPending(false)}));
        FetchData(`trending?geo=US`).then((data=>{setrightVideoDetails(data.data)}));
        FetchData(`comments?id=${id}`).then((data)=>{setComments(data.data)});
    },[id])
    
    
    const text = videoDetails?.description;
    const [btnText, setbtnText] = useState("Show More");

    const showMoreClick = ()=>{
        setshowMore(!showMore);
        btnText!=="Show Less"?setbtnText("Show Less"):setbtnText("Show More");
    }
    
    return (
        <div className="player">
            {isPending?<LinearProgress />:<div className="all">
            <div className="left">
            <div className="player-video-details">
                <ReactPlayer className="frame" url={`https://www.youtube.com/watch?v=${id}`} width='800px' height='450px'/>
            <h3>{videoDetails.title}</h3>
            <h6 className="player-name">{videoDetails.channelTitle}</h6>
                <div className="description">
                {showMore?<p className="description-text">{text.substring(0,300)}</p>:<p className="description-text">{text}</p>}
                <button className="showMore-btn" onClick={showMoreClick}>{btnText}</button>
                </div>
            </div>
            <div className="comments">
                <h3>Comments...</h3>
                {Comments?.filter((com)=>
                    com.authorThumbnail!==null && com.authorText!==null && com.textDisplay!==null && com.publishedTimeText!==null
                ).map((comment)=>
                    <div className="comment-card">
                        <div className="comment-head">
                            <img className="comment-pfp" src={comment.authorThumbnail[0].url} alt=""/>
                            <h6 className="comment-author-name">{comment.authorText}</h6>
                            <p className="comment-date">{comment.publishedTimeText}</p>
                        </div>
                        <div className="comment-body">
                        {showMore?<p className="comment-text">{comment.textDisplay.substring(0,250)}</p>:<p className="comment-text">{comment.textDisplay}</p>}
                        </div>
                    </div>
                )}
                </div>
            </div>
            <div className="player-right">
                {rightVideoDetails.filter((vid)=>
                    vid.type==="video" && vid.title!==null && vid.channelTitle!==null && vid.viewCount!==null && vid.thumbnail!==null && vid.publishedTimeText!==null
                ).map((videos)=>

                        <div className="right-vid-thumbnail">
                            <Card id={(videos.videoId)} videoLength={(videos.lengthText)} thumbnail={(videos.thumbnail[0].url)} channelpfp={(videos.channelThumbnail[0].url)} title={(videos.title)} channelName={(videos.channelTitle)} views={Intl.NumberFormat("en", {notation: "compact"}).format(videos.viewCount)} time={(videos.publishedTimeText)}/>
                        </div>
                )}
            </div>
            </div>}
        </div>
    );
}
 
export default Player;