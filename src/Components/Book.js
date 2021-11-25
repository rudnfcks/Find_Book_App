import style from "../css/Book.module.css";

function Book({ image, title, discount, price, link }) {
  const tit = title.replace(/<b>/g, "").replace(/<\/b>/g, "");

  return (
    <a href={link}>
      <div className={style.book}>
        <img src={image.replace("m1", "m5")}></img>
        <p>{`${tit.substring(0, 10)}...`}</p>
        <div>
          <span>
            {discount != "" ? (
              <del>{price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</del>
            ) : (
              price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            )}
          </span>
          <span>
            {discount.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      </div>
    </a>
  );
}

export default Book;
