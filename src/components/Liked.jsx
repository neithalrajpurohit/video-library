import { Link } from "react-router-dom";
import houseImage from "../assets/house.png";

import likedImage from "../assets/liked.png";
import historyImage from "../assets/history.png";

export const Liked = () => {
  return (
    <div className="liked-cnt">
      <div style={{ paddingTop: "5rem", marginBottom: "1rem" }}>
        <Link className="vd-links" to="/">
          <img src={houseImage} alt="house" width="20px" height="20px" />
          Home
        </Link>
      </div>
      <div style={{ marginBottom: "1rem" }}>
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
    </div>
  );
};
