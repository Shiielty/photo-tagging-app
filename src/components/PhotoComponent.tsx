import "./PhotoComponent.css";
import photoImgUrl from "/photo-img/pierre-roussel-n64-web.jpg";
import Dropdown from "./Dropdown";

import { useState } from "react";

export default function PhotoComponent({
  setWinStatus,
}: {
  setWinStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [dropdownPos, setDropdownPos] = useState([0, 0]);
  const [targetCoor, setTargetCoor] = useState([0, 0]);

  function getCoordinates(e: React.MouseEvent<HTMLImageElement>) {
    const target = e.target as HTMLElement;

    const x = e.nativeEvent.offsetX / target.offsetWidth;
    const y = e.nativeEvent.offsetY / target.offsetHeight;

    return [x, y];
  }

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    const target = e.target as HTMLElement;

    const coor = getCoordinates(e);

    const posX = coor[0] * target.offsetWidth;
    const posY = coor[1] * target.offsetHeight + 70;

    setDropdownPos([posX, posY]);
    setTargetCoor(coor);
  }

  return (
    <>
      <div className="photo-component">
        <img src={photoImgUrl} onClick={(e) => handleClick(e)} />
      </div>
      <Dropdown
        x={dropdownPos[0]}
        y={dropdownPos[1]}
        coor={targetCoor}
        setWinStatus={setWinStatus}
      />
    </>
  );
}
