import "./Dropdown.css";
import targets from "../data/data";

type targetType =
  | {
      name: string;
      x: number;
      y: number;
    }
  | undefined;

export default function Dropdown({
  x,
  y,
  coor,
}: {
  x: number;
  y: number;
  coor: number[];
}) {
  function isCorrect(targetName: string, coordinates: number[]) {
    const [x, y] = coordinates;

    const targetObj: targetType = targets.find((val) => targetName == val.name);

    if (targetObj !== undefined) {
      return (
        x <= targetObj.x + 0.03 &&
        x >= targetObj.x - 0.03 &&
        y <= targetObj.y + 0.03 &&
        y >= targetObj.y - 0.03
      );
    } else {
      return false;
    }
  }

  if (x === 0 && y === 0) return null;
  return (
    <div className="dropdown" style={{ left: x, top: y }}>
      <ul>
        {targets.map((target) => (
          <li
            key={target.name}
            onClick={() => console.log(isCorrect(target.name, coor))}
          >
            {target.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
