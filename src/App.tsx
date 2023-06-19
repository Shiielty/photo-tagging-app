import { useState } from "react";
import "./App.css";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import PhotoComponent from "./components/PhotoComponent";
import Timer from "./components/Timer";

function App() {
  const [winStatus, setWinStatus] = useState(false);

  return (
    <>
      <Navbar />
      <PhotoComponent setWinStatus={setWinStatus} />
      <Leaderboard isWin={winStatus} />
      <Timer />
    </>
  );
}

export default App;
