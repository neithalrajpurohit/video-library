import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
function App() {
  return (
    <div>
      <Header />
      <div className="home-color">
        <Home />
      </div>
    </div>
  );
}

export default App;
