import search from "./svg/search.svg";

import style from "./css/Header.module.css";
import cf from "./css/clearFix.css";

function Header() {
  return (
    <header id={style.header} className={cf.cf}>
      <div>
        <h1>F-Book</h1>
        <div className={style.searchBox}>
          <a href="#">
            <img src={search} alt="search" />
          </a>
          <input type="text" placeholder="제목, 저자, 출판사 검색" />
        </div>
      </div>
    </header>
  );
}

export default Header;
