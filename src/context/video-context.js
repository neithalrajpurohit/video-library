import { createContext, useContext, useState } from "react";
export const videoContext =createContext();

export function VideoProvider({children}){
    const[videos,setVideos]=useState([]);
    return(
        <videoContext.Provider value={{
videos,
setVideos,
        }}
        >
            {children}
        </videoContext.Provider>
    )
}
export const useVideo = () => {
    return useContext(videoContext);
}
export default VideoProvider;