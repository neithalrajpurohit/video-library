import { Link } from "react-router-dom";
import houseImage from "../assets/house.png";
import likedImage from "../assets/liked.png";
import historyImage from "../assets/history.png";
import { useVideo } from "../context/video-context";

export const Home = () => {
  const { videos, loader } = useVideo();
  return (
    <div className="video-cnt">
      <div style={{ paddingTop: "3rem", marginBottom: "1.5rem" }}>
        <Link className="vd-links" to="/">
          <img src={houseImage} alt="house" width="20px" height="20px" />
          Home
        </Link>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <Link className="vd-links" to="/like">
          <img src={likedImage} alt="liked" width="20px" height="20px" />
          Liked
        </Link>
      </div>
      <div>
        <Link className="vd-links" to="/history">
          <img src={historyImage} alt="history" width="20px" height="20px" />
          History
        </Link>
      </div>
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
            style={{
              backgroundColor: "white",
              height: "100vh",
              width: "100vh",
            }}
          >
            Loading......
          </h1>
        )}
      </div>
    </div>
  );
};
