import github from "../svg/github.svg";
import email from "../svg/email.svg";

import style from "../css/Footer.module.css";
import cf from "../css/clearFix.css";

function Footer() {
  return (
    <footer id={style.footer} className={cf.cf}>
      <div>
        <h1>F-Book</h1>
        <ul>
          <li>
            <img src={email} alt="email" />
            <span>rudnfcks@gmail.com</span>
          </li>
          <li>
            <img src={github} alt="github" />
            <span>https://github.com/rudnfcks</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
