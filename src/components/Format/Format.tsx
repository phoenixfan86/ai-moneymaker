import CountdownTimer from './CountDownTimer';
import styles from './Format.module.css';
import PackagesTable from './PackagesTable';

const Format = () => {

  return (
    <section className={styles.format} id='format'>
      <div className={styles.format__container}>
        <div className={styles.format__info}>
          <div className={styles.format__infoTimer}>
            <span>До <strong>підвищення</strong> цін залишилось:</span>
            <div className={styles.format__infoTimerContainer}>
              <CountdownTimer endDate='2025-10-17T23:59:59' />
            </div>
          </div>
          <div className={styles.format__infoImg}>
            <img src="./img/question-mark.png" alt="question" />
          </div>
          <div className={styles.format__infoBonus}>
            <h3><strong>Бонус при купівлі курсу -</strong> дочекайся дзвінка менеджера</h3>
          </div>
        </div>
        <PackagesTable />
      </div>
    </section>
  );
}
export default Format;