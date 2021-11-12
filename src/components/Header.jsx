import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate=useNavigate();
  function removeLogin() {
localStorage.removeItem("login");
navigate("/signup")
  }
  return (
    <div className="nav">
      <h1>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          OOdles Tube
        </Link>
      </h1>

      <button className="btn" onClick={()=>removeLogin()} >Log out</button>
    </div>
  );
};
