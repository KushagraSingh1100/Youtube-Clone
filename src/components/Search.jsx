import { useParams } from "react-router-dom";
import FetchData from "../utils/FetchData";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import SearchCards from "./SearchCards";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Search = () => {

    const [activeField, setactiveField] = useState("Home");
    const [videoDetails, setvideoDetails] = useState([]);
    const [isPending, setisPending] =useState(true);

    const {search} = useParams();
    useEffect(()=>{
        FetchData(`search?query=${search}`).then((data=>{setvideoDetails(data.data);setisPending(false)}));
    },[search])

    return (
        <div className="search-page">
            <div className="left-menu">
                <Link to="/">
                    <Menu activeField={activeField} setactiveField={setactiveField} setisPending={setisPending}></Menu>
                </Link>    
            </div>
            <div className="search-feed">
            <div className="searched-heading">
                <h1>Search Results For <div className="heading">{search}</div></h1>
            </div>
            {isPending?<LinearProgress />:<div className="search-results">{videoDetails?.filter((details)=> details.lengthText!==null&&details.type==="video"&&details.channelTitle!==null&&details.viewCount!==null&&details.publishedTimeText!==null&&details.channelThumbnail!==null&&details.thumbnail!==null
        ).map((detalis)=><div className="search-result-cards"><SearchCards channelId={(detalis.channelId)} id={(detalis.videoId)} videoLength={(detalis.lengthText)} thumbnail={(detalis.thumbnail[0].url)} channelpfp={(detalis.channelThumbnail[0].url)} title={(detalis.title)} channelName={(detalis.channelTitle)} views={Intl.NumberFormat("en", {notation: "compact"}).format(detalis.viewCount)+" views"} time={(detalis.publishedTimeText)}/></div>)}</div>}
        </div>
        </div>
    );
}
 
export default Search;