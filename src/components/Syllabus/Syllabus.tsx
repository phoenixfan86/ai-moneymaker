import styles from './Syllabus.module.css';
import syllabusItems from '../../data/syllabusItems.json'; // Інформація про програму курсу
import { useState } from 'react';

const Syllabus = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [activeLesson, setActiveLesson] = useState<Record<number, number | null>>({});

  const openModuleHandler = (index: number) => {
    if (index === activeModule) setActiveModule(null)
    else setActiveModule(index)
  }

  return (
    <section className={styles.syllabus} id='syllabus'>
      <div className={styles.syllabus__container}>
        <div className={styles.syllabus__header}>
          <div className={styles.syllabus__title}>
            <h2>Програма курсу</h2>
            <p><strong>Ви отримаєте</strong> структуровані знання, тотальну практику та досвід найкращих спікерів у даному напрямку</p>
          </div>
          <div className={styles.syllabus__info}>
            <span>Усього заплановано</span>
            <div className={styles.syllabus__infoCircles}>
              <ul className={styles.syllabus__infoCirclesItems}>
                <li className={styles.syllabus__infoCircleItem}>
                  <span className={styles.syllabus__circle}>3</span>
                  <span>Місяців</span>
                </li>
                <li className={styles.syllabus__infoCircleItem}>
                  <span className={styles.syllabus__circle}>5</span>
                  <span>Блоків</span>
                </li>
                <li className={styles.syllabus__infoCircleItem}>
                  <span className={styles.syllabus__circle}>19</span>
                  <span>Уроків</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.syllabus__accordion}>
          <ul className={styles.syllabus__accordionItems}>
            {syllabusItems.map((item, index) => (
              <li key={index} className={styles.syllabus__accordionItem}>
                <div
                  className={`${styles.syllabus__itemHeader} ${index === activeModule ? styles.moduleActive : ""}`}
                  onClick={() => openModuleHandler(index)}
                >
                  <div className={styles.syllabus__itemHeaderLeft}>
                    <h2>{item.title}</h2>
                    <div className={styles.syllabus__itemHeaderBadges}>
                      <div className={styles.syllabus__itemHeaderBadge}>
                        <img src={`${index === activeModule ? "./img/icons/play-white.png" : "./img/icons/play.png"}`} alt="video" />
                        <span>{item.videoInfo}</span>
                      </div>
                      <div className={styles.syllabus__itemHeaderBadge}>
                        <img src={`${index === activeModule ? "./img/icons/zoom-white.png" : "./img/icons/zoom.png"}`} alt="zoom" />
                        <span>{item.zoomInfo}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.syllabus__itemHeaderRight}>
                    <button
                      onClick={() => openModuleHandler(index)}
                      className={`${styles.syllabus__moreBtn} ${index === activeModule ? styles.activeMoreBtn : ""}`}
                    >Більше</button>
                    <div className={styles.syllabus__itemArrow}>
                      <img src={`${index === activeModule ? "./img/icons/arrow-white.png" : "./img/icons/arrow.png"}`} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className={`${styles.syllabus__itemCollapse} ${index === activeModule ? styles.open : ""}`}>
                  <div className={styles.syllabus__itemBody}>
                    <div className={styles.syllabus__moduleLessons}>
                      <h3>Уроки модулю</h3>
                      <ul className={styles.syllabus__lessonsList}>
                        {item.moduleLessons.map((lesson, i) => (
                          <li
                            key={i}
                            onClick={() => setActiveLesson((prev) => ({
                              ...prev,
                              [index]: prev[index] === i ? prev[index] : i,
                            }))
                            }
                            className={activeLesson[index] === i ? styles.activeLesson : ""}
                          >
                            <span>{(index + 1) * 10 + (i + 1)} / </span>
                            {lesson.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {activeLesson[index] !== undefined && activeLesson[index] !== null && (
                      <div className={styles.syllabus__lessonsDetail}>
                        <div className="">
                          <h3>Про що урок</h3>
                          <p>{item.moduleLessons[activeLesson[index]]?.aboutLesson || "-- Немає данних --"}</p>
                        </div>
                        <div className="">
                          <span>В результаті навчання ви:</span>
                          <ul className={styles.syllabus__detailList}>
                            {item.moduleLessons[activeLesson[index]]?.outcomesLesson.map((outcome, j) => (
                              <li key={j}>{outcome}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.syllabus__submitBtnContainer} >
                          <a href='#format' className={styles.syllabus__submitBtn}>Забронювати місце на курс</a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.syllabus__btnContainer}>
            <a href='#format' className={styles.syllabus__submitBtn}>Записатися на курс</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Syllabus;