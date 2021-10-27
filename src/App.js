import "./App.css";
import { Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Videoviewer } from "./components/Videoviewer";
import { Liked } from "./components/Liked";
import { History } from "./components/History";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes path="/watch/:videoId" element={<Videoviewer />} />
        <Routes path="/like" element={<Liked />} />
        <Routes path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
