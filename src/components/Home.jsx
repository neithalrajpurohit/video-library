import { useVideo } from "../context/video-context"
import allvideos from "../db/videodb";
export const Home =()=>{
    const {videos,setVideos}=useVideo();
setVideos(allvideos);
    return(
        <>
        {videos.map((video)=>(
            <div>
                 <img src={video.image} alt="images"/>
                 <h1>{video.title}</h1>
            </div>
        ))}
        </>
    )
}