import "./Dropdown.css";
import targets from "../data/data";
import React, { useEffect, useState } from "react";

type targetType =
  | {
      name: string;
      x: number;
      y: number;
    }
  | undefined;

type propsType = {
  dropdownDisplay: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  x: number;
  y: number;
  coor: number[];
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNotificationVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setNotificationValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Dropdown({
  dropdownDisplay,
  setDisplay,
  x,
  y,
  coor,
  setWinStatus,
  setIsNotificationVisible,
  setNotificationValue,
}: propsType) {
  const initialFoundState = targets.map((target) => ({
    id: target.id,
    name: target.name,
    found: false,
  }));

  const [foundState, setFoundState] = useState(initialFoundState);

  useEffect(() => {
    setWinStatus(isWin());
  });

  function isWin() {
    return foundState.every((target) => target.found === true);
  }

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
      setNotificationValue("correct");
    } else {
      setDisplay("none");
      setNotificationValue("incorrect");
    }

    setIsNotificationVisible(true);

    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 3000);
  }

  if (x === 0 && y === 0) return null;
  return (
    <div
      className="dropdown"
      style={{ display: dropdownDisplay, left: x, top: y }}
    >
      <ul>
        {targets.map((target) => {
          if (foundState[target.id].found === true) {
            return (
              <li key={target.id}>
                <button
                  type="button"
                  className="disable"
                  onClick={() => handleListClick(target.name, coor)}
                  disabled
                >
                  {target.name}
                </button>
              </li>
            );
          } else {
            return (
              <li key={target.id}>
                <button
                  type="button"
                  onClick={() => handleListClick(target.name, coor)}
                >
                  {target.name}
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
