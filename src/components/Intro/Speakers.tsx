import styles from './Speakers.module.css';

const Speakers = () => {
  return (
    <div className={styles.speakers}>
      <div className={styles.speakers__title}>
        <h3 className="">ТОП спікери</h3>
      </div>
      <div className={styles.speakers__images}>
        <ul>
          <li className={styles.speakers__image}>
            <img src="./img/team/1.png" alt="speaker_1" />
          </li>
          <li className={styles.speakers__image}>
            <img src="./img/team/2.png" alt="speaker_2" />
          </li>
          <li className={styles.speakers__image}>
            <img src="./img/team/3.jpg" alt="speaker_3" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Speakers;