import Menu from "./Menu"
import Cards from "./Cards"
import { useState } from "react"
import FetchData from "../utils/FetchData"
import { useEffect } from "react"
import LinearProgress from "../utils/LinearProgress"


const Feed = () => {
    
    const [activeField, setactiveField] = useState("Home");
    const [isPending,setisPending] = useState(true);
    const [videoDetails, setvideoDetails] = useState([]);
    
    useEffect(()=>{
        if(activeField === "Home"){
            FetchData(`${activeField.toLocaleLowerCase()}`).then((data=>{setvideoDetails(data.data);setisPending(false)}));
        }
        else{
            FetchData(`search?query=${activeField}&lang=en&type=video`).then((data=>{setvideoDetails(data.data);setisPending(false)}));
        }
        window.scrollTo(0, 0);
    },[activeField])
    
    return (
        <div className="content">
            <div className="left-menu">    
                <Menu activeField={activeField} setactiveField={setactiveField} setisPending={setisPending}></Menu>
            </div>
            {isPending===true?<LinearProgress/>:<div className="videos">
            {videoDetails?.filter((details)=> details.lengthText!==null&&details.type==="video"&&details.channelTitle!==null&&details.viewCount!==null&&details.publishedTimeText!==null&&details.channelThumbnail!==null&&details.thumbnail!==null).map((detalis)=>
            <Cards channelId={(detalis.channelId)} id={(detalis.videoId)} videoLength={(detalis.lengthText)} thumbnail={(detalis.thumbnail[0].url)} channelpfp={(detalis.channelThumbnail[0].url)} title={(detalis.title)} channelName={(detalis.channelTitle)} views={Intl.NumberFormat("en", {notation: "compact"}).format(detalis.viewCount)+" views"} time={(detalis.publishedTimeText)}/>)}
            </div>}
        </div>
    );
}
export default Feed;