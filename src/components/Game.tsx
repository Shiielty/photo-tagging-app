import { useState } from "react";
import Leaderboard from "./Leaderboard";
import PhotoComponent from "./PhotoComponent";
import Timer from "./Timer";
import Notification from "./Notification";

type gamePropsType = {
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
  winStatus: boolean;
};

export default function Game({ setWinStatus, winStatus }: gamePropsType) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationValue, setNotificationValue] = useState("incorrect");

  return (
    <>
      <PhotoComponent
        setWinStatus={setWinStatus}
        setIsNotificationVisible={setIsNotificationVisible}
        setNotificationValue={setNotificationValue}
      />
      <Leaderboard isWin={winStatus} time={time} />
      <Timer
        time={time}
        setTime={setTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        isWin={winStatus}
      />
      <Notification
        isNotificationVisible={isNotificationVisible}
        notificationValue={notificationValue}
      />
    </>
  );
}
