import React, { useEffect } from "react";
import "./Timer.css";

type TimerPropsType = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isWin: boolean;
};

export default function Timer({
  time,
  setTime,
  isRunning,
  setIsRunning,
  isWin,
}: TimerPropsType) {
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isRunning) {
      interval = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (isWin) {
      setIsRunning(false);
    }
  });

  const miliseconds = time % 100;
  const seconds = Math.floor((time % 6000) / 100);
  const minute = Math.floor((time % 36000) / 6000);

  return (
    <div className="timer">
      <span>
        {minute.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {miliseconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
}
