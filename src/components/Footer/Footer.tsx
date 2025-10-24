import styles from './Footer.module.css'

const Footer = () => {
  const socialItems = [
    {
      title: 'Facebook',
      img: './img/icons/facebook.png',
      link: '#'
    },
    {
      title: 'Youtube',
      img: './img/icons/youtube.png',
      link: '#'
    },
    {
      title: 'Telegram',
      img: './img/icons/telegram.png',
      link: '#'
    },
    {
      title: 'Instagram',
      img: './img/icons/instagram.png',
      link: '#'
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__info}>
            <div className={styles.footer__logo}>
              <img src="./img/Logo_1.png" alt="Genius Space" />
            </div>
            <p>ТОВ "КОНСАЛТИНГ СИНДИКАТ", ЄДРПОУ: 42182763, Адреса: 02000, м. Київ, вул. Паньківська, 14.
            </p>
            <div className={styles.footer__social}>
              <ul className={styles.footer__socialLogo}>
                {socialItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>
                      <img src={item.img} alt={item.title} />
                    </a>
                  </li>
                ))}
              </ul>
              <div >
              </div>
            </div>
          </div>
          <div className={styles.footer__menu}>
            <h4>О GeniusMarketing</h4>
            <nav>
              <ul className={styles.footer__menuItems}>
                <li><a href="#">Головна</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="/">Про нас</a></li>
                <li><a href="#">Навчання</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.footer__contact}>
            <h4>Контакти</h4>
            <p>
              Україна, Київ, Майдан Незалежності, 2,
              Spaces Maidan Plaza, 02000
            </p>
            
            <p>+38 044 237 13 18 (Україна),</p>

            <a href="mailto:info@geniusmarketing.me">info@geniusmarketing.me</a>
          </div>
        </div>
        <div className={styles.footer__footer}>
          <div className={styles.footer__copyright}>
            <p>© Genius.Space  Всі права захищені.</p>
          </div>
          <nav>
            <ul className={styles.footer__additionalLinks} >
              <li><a href="#">Умови надання послуг</a></li>
              <li><a href="#">Політика конфіденційності</a></li>
              <li><a href="#">Умови повернення</a></li>
              <li><a href="#">Умови передзамовлення послуг</a></li>
              <li><a href="#">Постачальники послуг</a></li>
              <li><a href="#">Попередження</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
