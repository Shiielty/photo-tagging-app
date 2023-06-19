import { useState } from "react";
import Leaderboard from "./Leaderboard";
import PhotoComponent from "./PhotoComponent";
import Timer from "./Timer";

type gamePropsType = {
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
  winStatus: boolean;
};

export default function Game({ setWinStatus, winStatus }: gamePropsType) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  return (
    <>
      <PhotoComponent setWinStatus={setWinStatus} />
      <Leaderboard isWin={winStatus} time={time} />
      <Timer
        time={time}
        setTime={setTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        isWin={winStatus}
      />
    </>
  );
}
