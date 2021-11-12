import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const videoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]); //eslint-disable-next-line
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      try {
        const response = await axios.get(
          "https://test-1.neithalrajpuroh.repl.co/allvideos"
        );

        setVideos(response.data.allvideos);
        setLoader(false);
        setError(false);
      } catch (err) {
        setVideos([]);
        setLoader(false);
        setError(true);
        console.log(err);
      }
    })();
  }, []);
  return (
    <videoContext.Provider
      value={{
        videos,
        setVideos,
        loader,
        setLoader,
      }}
    >
      {children}
    </videoContext.Provider>
  );
}
export const useVideo = () => {
  return useContext(videoContext);
};
export default VideoProvider;
