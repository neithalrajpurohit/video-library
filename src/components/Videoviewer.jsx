import { useParams } from "react-router";
import { useVideo } from "../context/video-context";

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
      <h1>{video?.title}</h1>
    </div>
  );
};
