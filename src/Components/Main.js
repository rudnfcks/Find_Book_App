import { useEffect, useState } from "react";
import { getBooks } from "../api/findBook";
import style from "../css/Main.module.css";
import Book from "./Book";

function Main() {
  const [books1, setBooks1] = useState([]);
  const [books2, setBooks2] = useState([]);
  const [books3, setBooks3] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    const response1 = getBooks("소설", 16);
    response1.then((result) => {
      setBooks1(result);
    });

    const response2 = getBooks("프로그래밍", 16);
    response2.then((result) => {
      setBooks2(result);
    });

    const response3 = getBooks("문제집", 16);
    response3.then((result) => {
      setBooks3(result);
    });

    if (books1 != [] && books2 != [] && books3 != []) {
      setLoding(false);
    }
  }, []);

  return (
    <section id={style.section}>
      <h1>소설</h1>
      <div>
        {loading
          ? "Loding..."
          : books1.map((item, key) => (
              <Book
                image={item.image}
                title={item.title}
                discount={item.discount}
                price={item.price}
                link={item.link}
                key={key}
              />
            ))}
      </div>

      <h1>프로그래밍</h1>
      <div>
        {loading
          ? "Loding..."
          : books2.map((item, key) => (
              <Book
                image={item.image}
                title={item.title}
                discount={item.discount}
                price={item.price}
                link={item.link}
                key={key}
              />
            ))}
      </div>

      <h1>문제집</h1>
      <div>
        {loading
          ? "Loding..."
          : books3.map((item, key) => (
              <Book
                image={item.image}
                title={item.title}
                discount={item.discount}
                price={item.price}
                link={item.link}
                key={key}
              />
            ))}
      </div>
    </section>
  );
}

export default Main;
