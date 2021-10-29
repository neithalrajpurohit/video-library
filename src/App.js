import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Videoviewer } from "./components/Videoviewer";
import { Liked } from "./components/Liked";
import { History } from "./components/History";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { PrivateRoute } from "./components/PrivateRoute";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<Videoviewer />} />
        <PrivateRoute path="/like" element={<Liked />} />
        <PrivateRoute path="/history" element={<History />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
