import styles from './Installment.module.css';

function getNewDate(daysToAdd = 2) {
  const now = new Date();
  now.setDate(now.getDate() + daysToAdd);

  const day = now.getDate();
  const months = [
    "Січня",
    "Лютого",
    "Березня",
    "Квітня",
    "Травня",
    "Червня",
    "Липня",
    "Серпня",
    "Вересня",
    "Жовтня",
    "Листопада",
    "Грудня",
  ];

  const month = months[now.getMonth()];
  return { day, month };
}

const Installment = () => {
  const { day, month } = getNewDate();

  return (
    <section className={styles.installment}>
      <div className={styles.installment__container}>
        <div className={styles.installment__info}>
          <h2>
            <span>Розстрочка без переплат</span><br />від Genius.Space</h2>
          <p>
            Почніть навчатися вже зараз, оплату
            робіть частинами. Комфортний формат розстрочки: <span>від 2 до 12 місяців*</span>
          </p>
        </div>
        <div className={styles.installment__offerValid}>
          <h4>Пропозиція
            діє до:</h4>
          <span className={styles.installment__day}>{day}</span>
          <span className={styles.installment__month}>{month}</span>
        </div>
        <div className={styles.installment__howTo}>
          <h4>
            Як отримати розстрочку?
          </h4>
          <ul className={styles.installment__howToList}>
            <li><span className={styles.installment__ListCircle}></span>
              Залишіть заявку на участь та переходьте до оплати
            </li>
            <li><span className={styles.installment__ListCircle}></span>
              Вибери спосіб оплати у розстрочку
              (WayForPay)
            </li>
            <li><span className={styles.installment__ListCircle}></span>
              Оплачуйте частинами без переплат через:
            </li>
          </ul>
          <div className={styles.installment__howToImg}>
            <div className={styles.installment__img}>
              <img src="./img/icons/pb.png" alt="Приват Банк" />
            </div>
            <span>monobank | Universal Bank</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Installment;