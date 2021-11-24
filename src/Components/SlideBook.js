import style from "../css/SlideBook.module.css";

function SlideBook({ image }) {
  const img = { image }.image.replace("m1", "m5");

  return (
    <div className={style.block}>
      <div>
        <img src={img}></img>
      </div>
    </div>
  );
}

export default SlideBook;
