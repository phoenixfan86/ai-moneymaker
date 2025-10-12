import React, { useState } from 'react';
import format from '../../data/format.json';
import styles from './PackagesTable.module.css';
import CountdownTimer from './CountDownTimer';

type PlanId = "standard" | "pro" | "premium";

type Plan = {
  id: PlanId;
  title: string;
  info: string;
  price: number;
  discount: number;
  color: string;
  headClass: string;
  markClass: string;
};

type Feature = {
  feature: string;
  info?: string[];
} & Record<PlanId, string>;

type PackagesData = {
  plans: Plan[];
  features: Feature[];
};

const data: PackagesData = (format as unknown) as PackagesData;

const PackagesTable: React.FC = () => {
  const [isExpired, setIsExpired] = useState(false);
  const { plans, features } = data;


  return (
    <div className={styles.table__container}>
      <table className={styles.table__content}>
        <thead className={styles.table__head}>
          <tr className={styles.table__headRow}>
            <th className={styles.table__headTitle}>
              <span><strong>Оберіть</strong> свій формат участі</span>
            </th>
            {plans.map((plan) => (
              <th
                key={plan.id}
                className={styles.table__headProTitle}
              >
                <div className={styles[plan.headClass]}>
                  {plan.title}
                  <span className={styles.table__planInfo}>{plan.info}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, featureIndex) => (
            <tr
              key={featureIndex}
              className="">
              <td className={styles.table__rowItem}>
                <div className={styles.table__itemContent}>
                  <span className="">{feature.feature}</span>
                  {feature.info && (
                    <div className={styles.table__toolTips}>
                      <div className={styles.table__toolTipsIcon}>
                        i
                      </div>
                      <div className={styles.table__toolTipsItems}>
                        <ul className={styles.table__toolTipsItem}>
                          {feature.info.map((line, idx) => (
                            <li key={idx}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </td>
              {
                plans.map((plan) => (
                  <td
                    key={plan.id}
                    style={{
                      backgroundColor:
                        plan.id === "pro"
                          ? featureIndex % 2 === 0
                            ? "rgba(139, 87, 194, 0.3)"
                            : "rgba(139, 87, 194, 0.2)"
                          : "transparent",
                      width: plan.id === "pro"
                        ? featureIndex % 1 === 0
                          ? "270px"
                          : ""
                        : "190px"
                    }}>
                    <div className={styles.table__markBody}>
                      {feature[plan.id] === "+" ? (
                        <div
                          className={styles[plan.markClass]}
                          title="Included"
                        />
                      ) : feature[plan.id] === "-" ? (
                        <span>-</span>
                      ) : (
                        <span
                          className={styles.table__featureInfo}
                          style={{ fontWeight: plan.title === "Pro" ? 700 : 600 }}
                        >{feature[plan.id]}</span>
                      )}
                    </div>
                  </td>
                ))
              }
            </tr>
          ))}
          <tr>
            <td>
              <div className={styles.table__countdownTimer}>
                <div className="">
                  <span>До <strong>підвищення</strong> цін залишилось:</span>
                  <div className={styles.format__infoTimerContainer}>
                    <CountdownTimer endDate='2025-10-17T23:59:59'
                      onExpire={() => setIsExpired(true)}
                    />
                  </div>
                </div>
              </div>
            </td>
            {plans.map((plan) => (
              <td>
                <div className={styles.table__proposal}>
                  {isExpired ? (
                    <span
                      className={styles.table__discount}
                      style={{ color: plan.color }}
                    >
                      {plan.price}
                      <span> грн</span>
                    </span>
                  ) : (
                    <>
                      <span className={styles.table__price}>
                        {plan.price}
                        <span> грн</span>
                      </span>
                      <span
                        className={styles.table__discount}
                        style={{ color: plan.color }}
                      >
                        {plan.discount}
                        <span> грн</span>
                      </span>
                    </>
                  )}
                  <button
                    className={styles.table__proposalBtn}
                    style={{ background: plan.color }}
                  >
                    Залишити заявку
                  </button>
                  <p style={{ color: plan.color }}>
                    Залишилось місць 25 з 145
                  </p>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div >
  );
};

export default PackagesTable;
