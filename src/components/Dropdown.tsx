import "./Dropdown.css";
import targets from "../data/data";
import { useState } from "react";

type targetType =
  | {
      name: string;
      x: number;
      y: number;
    }
  | undefined;

type propsType = {
  x: number;
  y: number;
  coor: number[];
};

export default function Dropdown({ x, y, coor }: propsType) {
  const initialFoundState = targets.map((target) => ({
    id: target.id,
    name: target.name,
    found: false,
  }));

  const [foundState, setFoundState] = useState(initialFoundState);

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

  function handleListClick(targetName: string, coordinates: number[]) {
    const newFoundState = [...foundState];
    const targetItem = newFoundState.find((item) => item.name === targetName);

    if (targetItem !== undefined) {
      const index = newFoundState.indexOf(targetItem);
      newFoundState[index] = {
        name: newFoundState[index].name,
        id: newFoundState[index].id,
        found: true,
      };
    }

    if (isCorrect(targetName, coordinates)) {
      setFoundState(newFoundState);
      console.log(true);
    } else {
      console.log(false);
    }
  }

  if (x === 0 && y === 0) return null;
  return (
    <div className="dropdown" style={{ left: x, top: y }}>
      <ul>
        {targets.map((target) => {
          if (foundState[target.id].found === true) {
            return (
              <li
                key={target.id}
                className="disable"
                onClick={() => handleListClick(target.name, coor)}
              >
                {target.name}
              </li>
            );
          } else {
            return (
              <li
                key={target.id}
                onClick={() => handleListClick(target.name, coor)}
              >
                {target.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
