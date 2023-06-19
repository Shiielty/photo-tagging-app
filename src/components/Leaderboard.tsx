import "./Leaderboard.css";

type LeaderboardPropsType = {
  isWin: boolean;
  time: number;
};

export default function Leaderboard({ isWin, time }: LeaderboardPropsType) {
  const miliseconds = time % 100;
  const seconds = Math.floor((time % 6000) / 100);
  const minute = Math.floor((time % 36000) / 6000);

  if (!isWin) return null;
  return (
    <div className="leaderboard">
      <h1>You Found Us!!</h1>
      <p>
        Time:
        {minute.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {miliseconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
