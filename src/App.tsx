import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Game from "./components/Game";
import GameMenu from "./components/GameMenu";

function App() {
  const [winStatus, setWinStatus] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);

  return (
    <>
      <Navbar />
      {isGameStart ? (
        <Game setWinStatus={setWinStatus} winStatus={winStatus} />
      ) : (
        <GameMenu setIsGameStart={setIsGameStart} />
      )}
    </>
  );
}

export default App;
