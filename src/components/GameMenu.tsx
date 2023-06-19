import "./GameMenu.css";
import targets from "../data/data";
import React from "react";

export default function GameMenu({
  setIsGameStart,
  setLevel,
}: {
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleLevelClick = () => {
    setLevel(1);
    setIsGameStart(true);
  };

  return (
    <div className="game-menu">
      <h2>Choose Level</h2>
      <div className="level-wrapper" onClick={handleLevelClick}>
        <p className="easy">Level: Easy</p>
        <div className="target-list">
          {targets.map((target) => (
            <div key={target.id} className="target-item">
              <img src={target.url} alt={target.name} />
              <p>{target.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="soon">
        Level Medium & Hard in development. <span>maybe :p</span>
      </div>
    </div>
  );
}
