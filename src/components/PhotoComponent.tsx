import "./PhotoComponent.css";
import photoImgUrl from "../../public/photo-img/pierre-roussel-n64-web.jpg";

export default function PhotoComponent() {
  return (
    <>
      <div className="photo-component">
        <img src={photoImgUrl} />
      </div>
    </>
  );
}
