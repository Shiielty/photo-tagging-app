import React, { useState } from "react";
import "./Leaderboard.css";

type LeaderboardPropsType = {
  isWin: boolean;
  time: number;
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  playerList: {
    id: number;
    name: string;
    time: number;
  }[];
  setPlayerList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        time: number;
      }[]
    >
  >;
};

export default function Leaderboard({
  isWin,
  time,
  setWinStatus,
  setIsGameStart,
  setTime,
  playerList,
  setPlayerList,
}: LeaderboardPropsType) {
  const [playerName, setPlayerName] = useState("");

  const miliseconds = time % 100;
  const seconds = Math.floor((time % 6000) / 100);
  const minute = Math.floor((time % 36000) / 6000);

  const handleClick = () => {
    setWinStatus(false);
    setIsGameStart(false);
    setTime(0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlayerList([
      ...playerList,
      {
        id: playerList.length,
        name: playerName,
        time: time,
      },
    ]);

    handleClick();
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="player-list">
        <ul>
          {playerList.map((player) => (
            <li key={player.id} className="player-item">
              <p>
                {player.id + 1}. {player.name}
              </p>
              <p>
                {minute.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {miliseconds.toString().padStart(2, "0")}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={handleClick}>
        Play Again
      </button>
    </div>
  );
}
