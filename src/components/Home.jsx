import { Link } from "react-router-dom";
import { useVideo } from "../context/video-context";
export const Home = () => {
  const { videos, loader } = useVideo();

  return (
    <div className="card">
      {videos?.map((video) => (
        <div key={video.video_id}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/watch/${video.video_id}`}
          >
            <img src={video.image} alt="images" width="400" height="200" />
            <h1 className="text">{video.title}</h1>
          </Link>
        </div>
      ))}
      {loader && (
        <h1
          style={{ backgroundColor: "white", height: "100vh", width: "100vh" }}
        >
          Loading......
        </h1>
      )}
    </div>
  );
};
