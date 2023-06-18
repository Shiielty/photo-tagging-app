import "./Leaderboard.css";

export default function Leaderboard({ isWin }: { isWin: boolean }) {
  if (!isWin) return null;
  return <div className="leaderboard">You Win</div>;
}
