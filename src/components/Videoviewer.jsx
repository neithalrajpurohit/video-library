import { useParams } from "react-router";
import { useVideo } from "../context/video-context";
import image from "../assets/like.png";

export const Videoviewer = () => {
  const { videoId } = useParams();
  const { videos } = useVideo();
  const video = videos.find((video) => videoId === video.video_id);

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
      <button className="like-btn">
        <img className="like-img" src={image} alt="like" />
      </button>
    </div>
  );
};
