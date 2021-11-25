import search from "../svg/search_1.svg";

import style from "../css/Header.module.css";
import cf from "../css/clearFix.css";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

function Header() {
  const [searchText, setSearchText] = useState("");

  const changeInputHanddle = (event) => {
    const text = event.target.value;

    setSearchText(text.replace(/\?/g, ""));
  };

  return (
    <header id={style.header} className={cf.cf}>
      <div>
        <h1>Z-Book</h1>
        <div className={style.searchBox}>
          <a href={`../../search/${searchText}/0`}>
            <img src={search} alt="search" />
          </a>
          <form action={`../../search/${searchText}/0`}>
            <input
              type="text"
              placeholder="제목 검색"
              onChange={changeInputHanddle}
              value={searchText}
            />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
