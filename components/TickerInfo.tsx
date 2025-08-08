// components/TickerInfo.js
import React from "react";
import styles from "../styles/TickerInfo.module.css";

const TickerInfo = ({ data }: any) => {
  return (
    <div className={styles.tickerInfo}>
      <div className={styles.section}>
        <div className={styles.label}>Prv</div>
        <div className={styles.value}>{data.prv}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.label}>Ch</div>
        <div className={styles.value}>{data.ch}</div>
      </div>
      {/* ... other info like Open, High, Low */}
    </div>
  );
};

export default TickerInfo;
