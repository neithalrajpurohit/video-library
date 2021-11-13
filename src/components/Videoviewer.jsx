import { useParams } from "react-router";
import { useVideo } from "../context/video-context";
import { useEffect } from "react";
import axios from "axios";
import image from "../assets/liked.png";
export const Videoviewer = () => {
const { videoId } = useParams();
const { videos } = useVideo();
const video = videos.find((video) => videoId === video.video_id);
    
  useEffect(() => {
    (async() => {
        try{
            const response = await axios.post("https://test-1.neithalrajpuroh.repl.co/history", video);
            return response;
        } catch(err) {
            console.log(err)
        }
    })() // eslint-disable-next-line
}, [])
async function likeVideo(){
   try{
      const response=await axios.post("https://test-1.neithalrajpuroh.repl.co/like",video);
      return response;
    }
     catch(err){
      console.log(err);
   }
  }
  return (
    <div>
      <iframe
        title="Oodles Tube"
        className="style-video"
        width="1100"
        height="600"
        src={video?.url}
        allowFullScreen
      />
      <h1 className="video-text">{video?.title}</h1>
      <button className="like-btn" onClick={()=>likeVideo(video)}> 
        <img className="like-img" src={image} alt="like" />
       </button>
    </div>
  );
};
