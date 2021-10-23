import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="nav">
      <h1>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          OOdles Tube
        </Link>
      </h1>

      <button className="btn">Log out</button>
    </div>
  );
};
