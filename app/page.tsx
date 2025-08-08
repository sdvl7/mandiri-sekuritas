// pages/index.js
import Head from "next/head";
import TickerInfo from "../components/TickerInfo";
import OrderBook from "../components/OrderBook";
import Running from "../components/Running";

export default function Home() {
  const tickerData = {
    prv: "6,475",
    ch: "-50",
    open: "6,475",
    high: "6,550",
    // ... more data
  };

  const bidData = [
    { freq: 363, lot: "114,642", price: "6,400" },
    { freq: 740, lot: "72,890", price: "6,375" },
    // ... more bid rows
  ];

  const offerData = [
    { price: "6,425", lot: "37,523", freq: 172 },
    { price: "6,450", lot: "28,739", freq: 105 },
    // ... more offer rows
  ];

  return (
    <div>
      <Head>
        <title>Order Book UI</title>
      </Head>

      <main>
        <div className="flex">
          <div
            style={{
              backgroundColor: "#303030",
              height: "min-content",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Order Book
            <OrderBook bids={bidData} offers={offerData} />
            <TickerInfo data={{}} />
          </div>
          <div>
            <Running />
          </div>
        </div>
      </main>
    </div>
  );
}
