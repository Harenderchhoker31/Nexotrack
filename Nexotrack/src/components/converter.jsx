import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Converter = () => {
  const [coins, setCoins] = useState([]);
  const [fromCoin, setFromCoin] = useState(null);
  const [toCoin, setToCoin] = useState(null);
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);
  const [page] = useState(1);

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}`);
      const data = await res.json();
      setCoins(data);
      setFromCoin(data[0]);
      setToCoin(data[1]);
    };

    fetchCoins();
  }, [page]);

  useEffect(() => {
    if (fromCoin && toCoin) {
      const result = (amount * fromCoin.current_price) / toCoin.current_price;
      setConverted(result);
    }
  }, [amount, fromCoin, toCoin]);

  const swapCoins = () => {
    const temp = fromCoin;
    setFromCoin(toCoin);
    setToCoin(temp);
  };

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl glass rounded-2xl bg-gray-900 shadow-xl p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-6"> Crypto Converter</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-sm mb-2 block">From Currency</label>
            <select
              value={fromCoin?.id}
              onChange={(e) => setFromCoin(coins.find(c => c.id === e.target.value))}
              className="w-full bg-gray-800 text-white p-3 rounded-lg"
            >
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol.toUpperCase()}) - ${coin.current_price}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm mb-2 block">To Currency</label>
            <select
              value={toCoin?.id}
              onChange={(e) => setToCoin(coins.find(c => c.id === e.target.value))}
              className="w-full bg-gray-800 text-white p-3 rounded-lg"
            >
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol.toUpperCase()}) - ${coin.current_price}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={swapCoins}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white shadow"
          >
            Swap
          </button>
        </div>

        <div className="mb-6 text-center">
          <label className="text-sm block mb-2">Amount in {fromCoin?.symbol?.toUpperCase()}</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-40 text-center p-3 bg-gray-800 rounded-lg text-white"
          />
        </div>

        {converted && (
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">
              {amount} {fromCoin?.symbol?.toUpperCase()} ≈{' '}
              <span className="text-green-400">
                {converted.toFixed(6)} {toCoin?.symbol?.toUpperCase()}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Converter;
