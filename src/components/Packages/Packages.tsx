import styles from './packages.module.css';
import packages from '../../data/packages.json'; // Інформація про пакети на курсу

const Packages = () => {
  return (
    <section className={styles.packages}>
      <div className={styles.packages__container}>
        <h2>Пакети<span> навчання з AI</span></h2>
        <div className={styles.packages__content}>
          <div className={styles.packages__packageСards}>
            {packages.map((pkg, index) => (
              <div key={index} className={styles.packages__cardContent}>
                <div

                  className={styles.packages__cardItem}
                  style={{ border: `1px solid ${pkg.color}` }}
                >
                  <div
                    className={styles.packages__itemTitle}
                    style={{ background: `${pkg.color}` }}
                  >
                    <h3>{pkg.title}</h3>
                  </div>
                  <div className={styles.packages__packageBody}>
                    {pkg.packagesDetails?.length ? (
                      <div className={styles.packages__packageDetail}>
                        <h4>{pkg.title === 'Pro'
                          ? 'У цьому пакеті ви отримуєте:'
                          : 'Найповніший пакет, який включає усі 5 блоків навчання:'}
                        </h4>
                        <ul className={styles.packages__list}>
                          {pkg.packagesDetails.map((detail, i) => (
                            <li key={i}                     >
                              <span
                                className={styles.packages__square}
                                style={{ background: `${pkg.color}` }}
                              ></span>
                              {detail}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <div>
                      <h4>Пакет підійде тим, хто:</h4>
                      <ul className={styles.packages__list}>
                        {pkg.suitableFor.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.packages__info}>
                  <p>{pkg.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Packages;