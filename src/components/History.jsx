import { Link } from "react-router-dom";
import houseImage from "../assets/house.png";
import likedImage from "../assets/liked.png";
import historyImage from "../assets/history.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const History = () => {
  let [history,setHistory]=useState([]);

  useEffect(()=> {
    (async()=>{
      try{
      const response= await axios.get("https://test-1.neithalrajpuroh.repl.co/history")

      setHistory(response.data.history);
    }
catch(err){
  console.log(err);
}
    })()
  },[])

  return (
    <div>
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
      <div className="card">
        {history?.map((video) => (
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
    </div>
    </div>
    );
  };
