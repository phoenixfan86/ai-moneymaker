import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header>
      <div className={styles.header__container}>
        <a href="" className={styles.header__logo}>
          <img src="./img/Logo_1.png" alt="AI Moneymaker" />
        </a>
        <button
          className={`${styles.header__burger} ${menuOpen ? styles.open : ""}`}
          aria-expanded="false"
          aria-controls="main-nav"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${styles.header__nav} ${menuOpen ? styles.active : ""}`} id="main-nav">
          <ul className={styles.header__menu}>
            <li>
              <a href="#course-intro" className={styles.header__link}>Спікери</a>
            </li>
            <li>
              <a href="#syllabus" className={styles.header__link}>Програма</a>
            </li>
            <li>
              <a href="#" className={styles.header__link}>Відгуки</a>
            </li>
            <li>
              <a href="#format" className={styles.header__link}>Записатись</a>
            </li>
          </ul>
        </nav>
        <a href="#format" className={styles.header__button}>Записатися на курс</a>
      </div>
    </header >
  );
}
export default Header;