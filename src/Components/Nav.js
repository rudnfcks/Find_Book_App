import home from "../svg/home.svg";
import list from "../svg/list.svg";
import search from "../svg/search_2.svg";

import style from "../css/Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ select }) {
  return (
    <nav id={style.nav}>
      <div>
        <ul>
          <li className={select === 0 ? style.on : ""}>
            <Link to="/Find_Book_App/">
              <img src={home} alt="home" />
              <span>홈</span>
            </Link>
          </li>
          <li className={select === 1 ? style.on : ""}>
            <Link to="/Find_Book_App/search">
              <img src={search} alt="search" />
              <span>전체</span>
            </Link>
          </li>
          <li className={select === 2 ? style.on : ""}>
            <Link to="/Find_Book_App/select">
              <img src={list} alt="list" />
              <span>찜</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
