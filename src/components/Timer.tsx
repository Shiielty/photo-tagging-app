import { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(interval);
  }, [time, isRunning]);

  const startAndStopTimer = () => {
    setIsRunning(!isRunning);
  };

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
      <button type="button" onClick={startAndStopTimer}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}
