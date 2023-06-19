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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const miliseconds = time % 100;
  const seconds = Math.floor((time % 6000) / 100);
  const minute = Math.floor((time % 36000) / 6000);

  const handleClick = () => {
    setWinStatus(false);
    setIsGameStart(false);
    setTime(0);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlayerList(
      [
        ...playerList,
        {
          id: playerList.length,
          name: playerName,
          time: time,
        },
      ].sort((a, b) => a.time - b.time)
    );

    setIsSubmitted(true);
  };

  if (!isWin) return null;
  return (
    <div className="leaderboard">
      <h1>You found us in {(time / 100).toFixed(2)} seconds!</h1>
      <p>
        Time:
        {minute.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {miliseconds.toString().padStart(2, "0")}
      </p>
      {isSubmitted ? (
        <>
          <div>Submitted!</div>
          <button type="button" onClick={handleClick}>
            Play Again
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name..."
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <div className="player-list">
        <ol>
          {playerList.map((player, i) => (
            <li key={player.id} className="player-item">
              <p>
                {i + 1}. {player.name}
              </p>
              <p>
                {Math.floor((player.time % 36000) / 6000)
                  .toString()
                  .padStart(2, "0")}
                :
                {Math.floor((player.time % 6000) / 100)
                  .toString()
                  .padStart(2, "0")}
                :{(player.time % 100).toString().padStart(2, "0")}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
