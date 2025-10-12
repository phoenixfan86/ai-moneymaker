import React, { useEffect, useState } from "react";
import styles from './CountDownTimer.module.css';

type CountdownTimerProps = {
  endDate: string; //yyyy-mm-ddThh:mm:ss
  onExpire?: () => void;
};

const CountdownTimer: React.FC<CountdownTimerProps
> = ({ endDate, onExpire }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate).getTime() - new Date().getTime();
    const time = {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
      expired: difference <= 0,
    }

    return time;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft.expired) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (updated.expired) {
        clearInterval(timer);
        onExpire?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, onExpire, timeLeft.expired]);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdown__item}>
        <span className={styles.countdown__value}>{timeLeft.days}</span>
        <span className={styles.countdown__label}>дн</span>
      </div>
      <span className={styles.countdown__separator}>:</span>
      <div className={styles.countdown__item}>
        <span className={styles.countdown__value}>{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className={styles.countdown__label}>год</span>
      </div>
      <span className={styles.countdown__separator}>:</span>
      <div className={styles.countdown__item}>
        <span className={styles.countdown__value}>{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className={styles.countdown__label}>хв</span>
      </div>
      <span className={styles.countdown__separator}>:</span>
      <div className={styles.countdown__item}>
        <span className={styles.countdown__value}>{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className={styles.countdown__label}>сек</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
