import leftArrow from "../svg/L-Arrow.svg";
import rightArrow from "../svg/R-Arrow.svg";

import { useEffect, useState } from "react";
import { getBooks } from "../api/findBook";
import style from "../css/Slide.module.css";
import SlideBook from "./SlideBook";

function Slide() {
  const [Loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const response = getBooks("책", 10);
    response.then((result) => {
      setItems(result);
      setLoading(false);
    });
  }, []);

  const leftButtonHandle = () => {
    setIndex((current) => current - 1);
  };

  const rightButtonHandle = () => {
    setIndex((current) => current + 1);
  };

  return (
    <section id={style.section}>
      <div className={style.suggestion}>
        <div>추천 도서</div>
      </div>
      {Loading ? (
        <h1>Slide Loading...</h1>
      ) : (
        <div className={style.slide}>
          {index > 0 ? (
            <button onClick={leftButtonHandle}>
              <img src={leftArrow} alt="left" />
            </button>
          ) : (
            <button style={{ display: "none" }} />
          )}
          {index < 4 ? (
            <button onClick={rightButtonHandle}>
              <img src={rightArrow} alt="right" />
            </button>
          ) : (
            <button style={{ display: "none" }} />
          )}

          <div
            className={style.slideMain}
            style={{ marginLeft: `${index * -200}px` }}
          >
            {items.map((item, key) => (
              <SlideBook image={item.image} key={key} link={item.link} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Slide;
