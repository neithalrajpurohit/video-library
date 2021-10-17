import { useVideo } from "../context/video-context";
import allvideos from "../db/videodb";
export const Home = () => {
  const { videos, setVideos } = useVideo();
  setVideos(allvideos);
  return (
    <div className="card">
      {videos.map((video) => (
        <div>
          <img src={video.image} alt="images" width="400" height="200" />
          <h1 className="text">{video.title}</h1>
        </div>
      ))}
    </div>
  );
};
