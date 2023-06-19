import React from "react";
import "./Leaderboard.css";

type LeaderboardPropsType = {
  isWin: boolean;
  time: number;
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

export default function Leaderboard({
  isWin,
  time,
  setWinStatus,
  setIsGameStart,
  setTime,
}: LeaderboardPropsType) {
  const miliseconds = time % 100;
  const seconds = Math.floor((time % 6000) / 100);
  const minute = Math.floor((time % 36000) / 6000);

  const handleClick = () => {
    setWinStatus(false);
    setIsGameStart(false);
    setTime(0);
  };

  if (!isWin) return null;
  return (
    <div className="leaderboard">
      <h1>You Found Us!!</h1>
      <p>
        Time:
        {minute.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {miliseconds.toString().padStart(2, "0")}
      </p>
      <button type="button" onClick={handleClick}>
        Play Again
      </button>
    </div>
  );
}
