import React, { useState } from "react";
import PhotoComponent from "./PhotoComponent";
import Timer from "./Timer";
import Notification from "./Notification";

type gamePropsType = {
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
  winStatus: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

export default function Game({
  setWinStatus,
  winStatus,
  time,
  setTime,
}: gamePropsType) {
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
