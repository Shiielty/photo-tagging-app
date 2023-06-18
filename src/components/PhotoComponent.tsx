import "./PhotoComponent.css";
import photoImgUrl from "../../public/photo-img/pierre-roussel-n64-web.jpg";

import targets from "../data/data";

function getCoordinates(e: React.MouseEvent<HTMLImageElement>) {
  const target = e.target as HTMLElement;

  const x = e.nativeEvent.offsetX / target.offsetWidth;
  const y = e.nativeEvent.offsetY / target.offsetHeight;

  return [x, y];
}

function isCorrect(coordinates: number[]) {
  const [x, y] = coordinates;

  return targets.some(
    (target) =>
      x <= target.x + 0.03 &&
      x >= target.x - 0.03 &&
      y <= target.y + 0.03 &&
      y >= target.y - 0.03
  );
}

function handleClick(e: React.MouseEvent<HTMLImageElement>) {
  const coor = getCoordinates(e);

  console.log(isCorrect(coor));
}

export default function PhotoComponent() {
  return (
    <>
      <div className="photo-component">
        <img src={photoImgUrl} onClick={(e) => handleClick(e)} />
      </div>
    </>
  );
}
