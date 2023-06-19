import React, { useState } from "react";
import "./Leaderboard.css";

import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";

type LeaderboardPropsType = {
  isWin: boolean;
  time: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  playerList: listType[];
  setPlayerList: React.Dispatch<React.SetStateAction<listType[]>>;
  setShowLeaderboard: React.Dispatch<React.SetStateAction<boolean>>;
};

type listType = {
  id: string;
  name: string;
  time: number;
};

export default function Leaderboard({
  isWin,
  time,
  setLevel,
  setWinStatus,
  setIsGameStart,
  setTime,
  playerList,
  setPlayerList,
  setShowLeaderboard,
}: LeaderboardPropsType) {
  const [playerName, setPlayerName] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle");

  const playersCollectionRef = collection(db, "player");

  const addPlayer = async () => {
    await addDoc(playersCollectionRef, { name: playerName, time: time });
  };

  const updateLeaderboard = async () => {
    const data = await getDocs(query(playersCollectionRef, orderBy("time")));
    const list = data.docs.map<listType>((doc) => {
      const docData = doc.data();
      return {
        id: doc.id,
        name: docData.name,
        time: docData.time,
      };
    });
    setPlayerList(list);
  };

  const handleClick = () => {
    setWinStatus(false);
    setIsGameStart(false);
    setTime(0);
    setSubmitStatus("idle");
    setLevel(0);
    setShowLeaderboard(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("upload");
    addPlayer()
      .then(() => updateLeaderboard())
      .then(() => setSubmitStatus("submitted"));
  };

  return (
    <div className="leaderboard">
      {isWin ? (
        <>
          <h1>You finished in {(time / 100).toFixed(2)} seconds!</h1>
          {submitStatus === "submitted" ? (
            <div className="submit-status">Submitted!</div>
          ) : submitStatus === "upload" ? (
            <div className="submit-status">Uploading...</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Post your score: </label>
              <input
                type="text"
                placeholder="Username..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          )}
          <button type="button" onClick={handleClick}>
            Play Again
          </button>
        </>
      ) : (
        <h1>Leaderboard</h1>
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
