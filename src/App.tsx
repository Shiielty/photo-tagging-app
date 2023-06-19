import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import GameMenu from "./components/GameMenu";
import Leaderboard from "./components/Leaderboard";

const initialData = [
  {
    id: 0,
    name: "test",
    time: "05:00",
  },
];

function App() {
  const [winStatus, setWinStatus] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [time, setTime] = useState(0);
  const [playerList, setPlayerList] = useState(initialData);

  return (
    <>
      <Navbar />
      {winStatus ? (
        <Leaderboard
          isWin={winStatus}
          time={time}
          setWinStatus={setWinStatus}
          setIsGameStart={setIsGameStart}
          setTime={setTime}
          playerList={playerList}
          setPlayerList={setPlayerList}
        />
      ) : isGameStart ? (
        <Game
          setWinStatus={setWinStatus}
          winStatus={winStatus}
          time={time}
          setTime={setTime}
        />
      ) : (
        <GameMenu setIsGameStart={setIsGameStart} />
      )}
    </>
  );
}

export default App;
