import "./GameMenu.css";
import targets from "../data/data";
import React from "react";

export default function GameMenu({
  setIsGameStart,
}: {
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="game-menu">
      <h1>Find Us!</h1>
      <p>Find these character as fast as you can!</p>
      <ul>
        {targets.map((target) => (
          <li key={target.id}>{target.name}</li>
        ))}
      </ul>
      <button type="button" onClick={() => setIsGameStart(true)}>
        START
      </button>
    </div>
  );
}
