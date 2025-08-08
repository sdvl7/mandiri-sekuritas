"use client";
import React, { useEffect, useState } from "react";

// Main App component
const App = () => {
  const data = [
    {
      time: "15:32:55",
      code: "BRPT",
      price: 1.08,
      lot: 92,
      change: -10,
      percent: -0.92,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "ANTM",
      price: 1.305,
      lot: 569,
      change: -5,
      percent: -0.38,
      side: "BUY",
    },
    {
      time: "15:32:55",
      code: "ATLA-W",
      price: 2,
      lot: 2,
      change: 0,
      percent: 0.0,
      side: "BUY",
    },
    {
      time: "15:32:55",
      code: "MNCN",
      price: 332,
      lot: 86,
      change: -8,
      percent: -2.35,
      side: "BUY",
    },
    {
      time: "15:32:55",
      code: "MYOR",
      price: 2.8,
      lot: 4,
      change: 20,
      percent: 0.78,
      side: "BUY",
    },
    {
      time: "15:32:55",
      code: "ATLA",
      price: 50,
      lot: 48,
      change: 0,
      percent: 0.0,
      side: "BUY",
    },
    {
      time: "15:32:55",
      code: "MSJA",
      price: 360,
      lot: 8,
      change: 24,
      percent: 7.14,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "MSJA",
      price: 360,
      lot: 78,
      change: 24,
      percent: 7.14,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "MSJA",
      price: 360,
      lot: 22,
      change: 24,
      percent: 7.14,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "MSJA",
      price: 360,
      lot: 30,
      change: 24,
      percent: 7.14,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "MSJA",
      price: 360,
      lot: 17,
      change: 24,
      percent: 7.14,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "TLKM",
      price: 2.89,
      lot: 2,
      change: -160,
      percent: -5.25,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "CHIP",
      price: 1.61,
      lot: 1,
      change: -25,
      percent: -1.53,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "TLKM",
      price: 2.89,
      lot: 16,
      change: -160,
      percent: -5.25,
      side: "SELL",
    },
    {
      time: "15:32:55",
      code: "SURI",
      price: 122,
      lot: 1,
      change: -4,
      percent: -3.17,
      side: "BUY",
    },
    {
      time: "15:32:54",
      code: "MEDC",
      price: 1.295,
      lot: 37,
      change: -15,
      percent: -1.15,
      side: "SELL",
    },
    {
      time: "15:32:54",
      code: "TLKM",
      price: 2.9,
      lot: 41,
      change: -150,
      percent: -4.92,
      side: "BUY",
    },
    {
      time: "15:32:54",
      code: "TLKM",
      price: 2.9,
      lot: 9,
      change: -150,
      percent: -4.92,
      side: "BUY",
    },
    {
      time: "15:32:54",
      code: "TLKM",
      price: 2.89,
      lot: 28,
      change: -160,
      percent: -5.25,
      side: "SELL",
    },
    {
      time: "15:32:54",
      code: "TLKM",
      price: 2.89,
      lot: 40,
      change: -160,
      percent: -5.25,
      side: "SELL",
    },
    {
      time: "15:32:54",
      code: "TLKM",
      price: 2.9,
      lot: 2,
      change: -150,
      percent: -4.92,
      side: "BUY",
    },
    {
      time: "15:32:54",
      code: "TLKM",
      price: 2.89,
      lot: 1,
      change: -160,
      percent: -5.25,
      side: "SELL",
    },
    {
      time: "15:32:54",
      code: "BMRI",
      price: 6.425,
      lot: 26,
      change: -50,
      percent: -0.77,
      side: "BUY",
    },
    {
      time: "15:32:54",
      code: "MBMA",
      price: 580,
      lot: 71,
      change: -10,
      percent: -1.69,
      side: "SELL",
    },
    {
      time: "15:32:54",
      code: "MBMA",
      price: 580,
      lot: 32,
      change: -10,
      percent: -1.69,
      side: "BUY",
    },
    {
      time: "15:32:54",
      code: "TOWR",
      price: 785,
      lot: 10,
      change: 0,
      percent: 0.0,
      side: "SELL",
    },
    {
      time: "15:32:54",
      code: "BSBK",
      price: 67,
      lot: 5,
      change: -2,
      percent: -2.9,
      side: "SELL",
    },
  ];
  const [tradeData, setTradeData] = useState(data);
  useEffect(() => {
    const interval = setInterval(() => {
      setTradeData((prevTradeData) => {
        return prevTradeData.map((item) => ({
          ...item,
          lot: item.lot + 1,
          price: item.price + 1,
        }));
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 font-inter flex flex-col items-center">
      {/* Main Container */}
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-700 p-3 rounded-t-lg border-b border-gray-600">
          <h1 className="text-lg font-semibold">Running Trade</h1>
          <div className="flex items-center space-x-3">
            {/* Window controls (mocked) */}
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            {/* Refresh and Settings icons (using simple text for now) */}
            <span className="text-gray-400 cursor-pointer hover:text-gray-100">
              ⟳
            </span>{" "}
            {/* Refresh icon */}
            <span className="text-gray-400 cursor-pointer hover:text-gray-100">
              ⚙️
            </span>{" "}
            {/* Settings icon */}
            <span className="text-gray-400 cursor-pointer hover:text-gray-100">
              ✖️
            </span>{" "}
            {/* Close icon */}
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-700">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <label htmlFor="filter" className="text-gray-300 text-sm">
              Filter
            </label>
            <select
              id="filter"
              className="bg-gray-700 border border-gray-600 rounded-md py-1 px-2 text-sm text-gray-100 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
            >
              <option>All</option>
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <label htmlFor="select" className="text-gray-300 text-sm">
              Select...
            </label>
            <select
              id="select"
              className="bg-gray-700 border border-gray-600 rounded-md py-1 px-2 text-sm text-gray-100 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
            >
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className="flex space-x-2 w-full sm:w-auto justify-end sm:justify-start">
            <button className="bg-gray-600 hover:bg-gray-500 text-gray-100 text-sm px-3 py-1 rounded-md shadow-sm">
              Settings
            </button>
            <button className="bg-red-600 hover:bg-red-500 text-gray-100 text-sm px-3 py-1 rounded-md shadow-sm">
              Stop
            </button>
          </div>
        </div>

        {/* Trade Table */}
        <div className="h-96 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider rounded-tl-md"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Code
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Lot
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Change
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  %
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider rounded-tr-md"
                >
                  Side
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800  divide-y divide-gray-700">
              {tradeData.map((trade, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"}
                >
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-400">
                    {trade.time}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-100">
                    {trade.code}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-100">
                    {trade.price.toFixed(3)}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-100">
                    {trade.lot}
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm ${
                      trade.change > 0
                        ? "text-green-400"
                        : trade.change < 0
                          ? "text-red-400"
                          : "text-gray-400"
                    }`}
                  >
                    {trade.change > 0 ? "+" : ""}
                    {trade.change}
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm ${
                      trade.percent > 0
                        ? "text-green-400"
                        : trade.percent < 0
                          ? "text-red-400"
                          : "text-gray-400"
                    }`}
                  >
                    ({trade.percent > 0 ? "+" : ""}
                    {trade.percent.toFixed(2)}%)
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm font-semibold ${
                      trade.side === "BUY" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {trade.side}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
