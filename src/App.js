import "./App.css";
import { Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Videoviewer } from "./components/Videoviewer";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes path="/watch/:videoId" element={<Videoviewer />} />
      </Routes>
    </div>
  );
}

export default App;
