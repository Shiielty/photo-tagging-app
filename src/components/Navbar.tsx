import "./Navbar.css";
import targets from "../data/data";

type NavbarType = {
  level: number;
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
};

export default function Navbar({
  level,
  setLevel,
  setWinStatus,
  setIsGameStart,
  setTime,
}: NavbarType) {
  const handleHomeClick = () => {
    setLevel(0);
    setWinStatus(false);
    setIsGameStart(false);
    setTime(0);
  };

  return (
    <nav>
      <h1 onClick={handleHomeClick}>Find Us!</h1>
      {level ? (
        <div className="target-list">
          {targets.map((target) => (
            <div key={target.id} className="target-item">
              <img src={target.url} alt={target.name} />
              <p>{target.name}</p>
            </div>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
