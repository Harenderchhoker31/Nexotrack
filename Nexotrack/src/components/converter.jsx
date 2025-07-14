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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center p-6">
      <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-400 tracking-wide">
          🚀 Crypto Converter
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">Amount</label>
            <input
              type="number"
              className="rounded-xl px-4 py-3 bg-gray-800 text-white"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">Converted Amount</label>
            <div className="rounded-xl px-4 py-3 bg-gray-800 text-purple-400 text-lg font-semibold">
              {converted.toFixed(6)} {to?.symbol?.toUpperCase()}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">From Coin</label>
            <select
              className="rounded-xl px-4 py-3 bg-gray-800 text-white"
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
            <label className="mb-1 text-sm text-gray-300">To Coin</label>
            <select
              className="rounded-xl px-4 py-3 bg-gray-800 text-white"
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

        <div className="grid md:grid-cols-2 gap-6 mt-4 text-sm text-gray-400">
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="font-semibold text-purple-300">{from?.name}</p>
            <p>Symbol: {from?.symbol?.toUpperCase()}</p>
            <p>Price: ${from?.current_price?.toLocaleString()}</p>
            <p>Rank: #{from?.market_cap_rank}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="font-semibold text-purple-300">{to?.name}</p>
            <p>Symbol: {to?.symbol?.toUpperCase()}</p>
            <p>Price: ${to?.current_price?.toLocaleString()}</p>
            <p>Rank: #{to?.market_cap_rank}</p>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          Powered by CoinGecko API
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Converter;
