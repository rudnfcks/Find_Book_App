import { useEffect, useState } from "react";
import { searchBooks } from "../api/findBook";
import Book from "./Book";
import style from "../css/List.module.css";

function List({ search, index }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const response = searchBooks(search, index);
    setList([]);
    response.then((result) => {
      setList(result);
      setLoading(false);
    });
  }, []);

  return (
    <section id={style.section}>
      <div>
        {loading ? (
          <h1>loading</h1>
        ) : (
          list.map((item, key) => (
            <Book
              image={item.image}
              title={item.title}
              discount={item.discount}
              price={item.price}
              link={item.link}
              key={key}
            />
          ))
        )}
        {loading ? (
          ""
        ) : (
          <ul>
            {page.map((item, key) => (
              <li key={key}>
                <a href={key} className={index == key ? style.on : ""}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default List;
