import "./PhotoComponent.css";
import photoImgUrl from "../../public/photo-img/pierre-roussel-n64-web.jpg";

const targets = [
  {
    name: "Harvest Moon",
    x: 0.5695825049701789,
    y: 0.646505376344086,
  },
  {
    name: "Mario",
    x: 0.5427435387673957,
    y: 0.11088709677419355,
  },
  {
    name: "star",
    x: 0.7475149105367793,
    y: 0.5739247311827957,
  },
];

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
        console.log(e.clientX)
      </div>
    </>
  );
}
