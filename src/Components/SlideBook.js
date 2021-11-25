import style from "../css/SlideBook.module.css";

function SlideBook({ image, link }) {
  const img = { image }.image.replace("m1", "m5");

  return (
    <a href={link}>
      <div className={style.block}>
        <div>
          <img src={img}></img>
        </div>
      </div>
    </a>
  );
}

export default SlideBook;
