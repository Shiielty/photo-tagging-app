import "./Navbar.css";
import targets from "../data/data";

export default function Navbar() {
  return (
    <nav>
      <h1>Find Us!</h1>
      <div className="target-list">
        {targets.map((target) => (
          <div>{target.name}</div>
        ))}
      </div>
    </nav>
  );
}
