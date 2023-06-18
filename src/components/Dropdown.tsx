import "./Dropdown.css";

import targets from "../data/data";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <ul>
        {targets.map((target) => (
          <li key={target.name}>{target.name}</li>
        ))}
      </ul>
    </div>
  );
}
