// components/OrderBook.js
import React from "react";
import styles from "../styles/OrderBook.module.css";

const OrderBook = ({ bids, offers }: any) => {
  return (
    <div className={styles.orderBookContainer}>
      <div className={styles.column}>
        {/* Bid table header and rows */}
        <div className={styles.tableHeader}>
          <span>Freq</span>
          <span>Lot</span>
          <span>Bid</span>
        </div>
        {bids.map((bid: any, index: any) => (
          <div key={index} className={styles.tableRow}>
            <span>{bid.freq}</span>
            <span>{bid.lot}</span>
            <span className={styles.bidPrice}>{bid.price}</span>
          </div>
        ))}
      </div>
      <div className={styles.column}>
        {/* Offer table header and rows */}
        <div className={styles.tableHeader}>
          <span>Offer</span>
          <span>Lot</span>
          <span>Freq</span>
        </div>
        {offers.map((offer, index) => (
          <div key={index} className={styles.tableRow}>
            <span className={styles.offerPrice}>{offer.price}</span>
            <span>{offer.lot}</span>
            <span>{offer.freq}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
