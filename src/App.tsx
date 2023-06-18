import { useState } from "react";
import "./App.css";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import PhotoComponent from "./components/PhotoComponent";

function App() {
  const [winStatus, setWinStatus] = useState(false);

  return (
    <>
      <Navbar />
      <PhotoComponent setWinStatus={setWinStatus} />
      <Leaderboard isWin={winStatus} />
    </>
  );
}

export default App;
