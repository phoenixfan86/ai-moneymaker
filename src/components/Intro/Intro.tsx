import styles from './Intro.module.css';
import Speakers from './Speakers';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__container}>
        <div className={styles.intro__content}>
          <div className={styles.intro__info}>
            <div className={styles.intro__header}>
              <ul className={styles.intro__badges}>
                <li className={styles.intro__badge}>
                  <div className={styles.intro__badgeIcon}>
                    <img src="./img/icons/calendar.png" alt="Тривалість курсу" />
                  </div>
                  <span className={styles.intro__badgeText}>3 місяці</span>
                </li>
                <li className={styles.intro__badge}>
                  <div className={styles.intro__badgeIcon}>
                    <img src="./img/icons/globe.png" alt="Тип навчання" />
                  </div>
                  <span className={styles.intro__badgeText}>online</span>
                </li>
                <li className={styles.intro__badge}>
                  <div className={styles.intro__badgeIcon}>
                    <img src="./img/icons/flag.png" alt="Потік" />
                  </div>
                  <span className={styles.intro__badgeText}>1-й потік</span>
                </li>
              </ul>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__titleHeader}>
                <span className={styles.intro__titleFirst}>
                  ai
                </span>
                <p className={styles.intro__quote}>Для новачків з <strong>0 до повного опанування професії</strong><br />та результату</p>
              </div>
              <h1>Moneymaker</h1>
            </div>
            <p><strong>Опануйте трендовий напрямок</strong>, збільште ефективність у своїй роботі та почніть заробляти набагато більше за допомогою штучного інтелекту</p>
            <div className={styles.intro__btnContainer}>
              <a href='#format'
                className={styles.intro__button}
              >Записатись на курс</a>
            </div>
          </div>
          <div className={styles.intro__imgBlock}>
            <div className={styles.intro__firstImg}>
              <img src="./img/union.png" alt="img_1" />
            </div>
            <div className={styles.intro__roundImg}>
              <img src="./img/hand.png" alt="img_3" />
            </div>
            <div className={styles.intro__speakers}>
              <Speakers />
            </div>
          </div>
        </div>
        <div className={styles.intro__footer}><span className={styles.intro__subtitle}>Чому конкретно ви <span className="">навчитесь?</span></span></div>
      </div>
    </section>
  );
}
export default Intro;