import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Converter = () => {
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCoin, setFromCoin] = useState("bitcoin");
  const [toCoin, setToCoin] = useState("ethereum");
  const [converted, setConverted] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`
        );
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coin data:", error);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  useEffect(() => {
    const from = coins.find((coin) => coin.id === fromCoin);
    const to = coins.find((coin) => coin.id === toCoin);
    if (from && to) {
      const result = (amount * from.current_price) / to.current_price;
      setConverted(result);
    }
  }, [amount, fromCoin, toCoin, coins]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading coins...
      </div>
    );
  }

  const from = coins.find((c) => c.id === fromCoin);
  const to = coins.find((c) => c.id === toCoin);

  return (
    <div><Navbar/>
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="bg-gray-800 border border-gray-600 shadow-2xl p-12 w-full max-w-4xl rounded-2xl">
        <h1 className="text-5xl font-black mb-12 text-center tracking-tight text-white">
          🚀 Crypto Converter
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col">
            <label className="mb-3 text-lg font-bold text-gray-300">Amount</label>
            <input
              type="number"
              className="border border-gray-600 px-6 py-4 bg-gray-700 text-white text-lg font-semibold focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 rounded-lg"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-3 text-lg font-bold text-gray-300">Converted Amount</label>
            <div className="border border-gray-600 px-6 py-4 bg-gray-700 text-green-400 text-xl font-bold rounded-lg">
              {converted.toFixed(6)} {to?.symbol?.toUpperCase()}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-3 text-lg font-bold text-gray-300">From Coin</label>
            <select
              className="border border-gray-600 px-6 py-4 bg-gray-700 text-white text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 rounded-lg"
              value={fromCoin}
              onChange={(e) => setFromCoin(e.target.value)}
            >
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-3 text-lg font-bold text-gray-300">To Coin</label>
            <select
              className="border border-gray-600 px-6 py-4 bg-gray-700 text-white text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 rounded-lg"
              value={toCoin}
              onChange={(e) => setToCoin(e.target.value)}
            >
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 text-lg">
          <div className="bg-gray-700 border border-gray-600 p-6 shadow-lg rounded-xl">
            <p className="font-black text-white text-xl mb-2">{from?.name}</p>
            <p className="font-semibold text-gray-300">Symbol: {from?.symbol?.toUpperCase()}</p>
            <p className="font-semibold text-gray-300">Price: ${from?.current_price?.toLocaleString()}</p>
            <p className="font-semibold text-gray-300">Rank: #{from?.market_cap_rank}</p>
          </div>

          <div className="bg-gray-700 border border-gray-600 p-6 shadow-lg rounded-xl">
            <p className="font-black text-white text-xl mb-2">{to?.name}</p>
            <p className="font-semibold text-gray-300">Symbol: {to?.symbol?.toUpperCase()}</p>
            <p className="font-semibold text-gray-300">Price: ${to?.current_price?.toLocaleString()}</p>
            <p className="font-semibold text-gray-300">Rank: #{to?.market_cap_rank}</p>
          </div>
        </div>

        <div className="text-center mt-12 text-lg font-semibold text-gray-300">
          Powered by CoinGecko API
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Converter;
// converter