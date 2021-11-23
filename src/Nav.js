import home from "./svg/home.svg";
import list from "./svg/list.svg";
import search from "./svg/search_2.svg";

import style from "./css/Nav.module.css";
import cf from "./css/clearFix.css";

function Nav() {
  return (
    <nav id={style.nav}>
      <div>
        <ul>
          <li className={cf.cf}>
            <img src={home} alt="home" />
            <span span>홈</span>
          </li>
          <li className={cf.cf}>
            <img src={search} alt="search" />
            <span span>전체</span>
          </li>
          <li className={cf.cf}>
            <img src={list} alt="list" />
            <span>찜목록</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
