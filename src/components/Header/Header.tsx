import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.header__container}>
        <a href="" className={styles.header__logo}>
          <img src="./img/Logo_1.png" alt="AI Moneymaker" />
        </a>
        <button
          className={styles.header__burger}
          aria-expanded="false"
          aria-controls="main-nav"
          aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={styles.header__nav} id="main-nav">
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
        <button className={styles.header__button}>Записатися на курс</button>
      </div>
    </header >
  );
}
export default Header;