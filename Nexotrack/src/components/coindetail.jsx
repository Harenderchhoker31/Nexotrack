import React from 'react';

const CoinDetail = ({ coin, onClose }) => {
  if (!coin) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-gray-800 text-white border border-gray-700 rounded-3xl p-8 sm:p-12 max-w-4xl w-full mx-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition"
        >
          ✖
        </button>

        <h2 className="text-4xl font-semibold text-center text-gray-100 mb-8">
          {coin.name} Details
        </h2>
        <div className="flex justify-center mt-8">
          <img src={coin.image} alt={coin.name} className="w-20 h-20 rounded-full shadow-xl border-2 border-white/30 mb-20" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-lg text-gray-300 mb-8">
          <p><span className="font-semibold text-gray-200">Symbol : </span> {coin.symbol.toUpperCase()}</p>
          <p><span className="font-semibold text-gray-200">Price : </span> 
            <span className="text-yellow-400 font-bold">$ {coin.current_price.toLocaleString()}</span>
          </p>
          <p><span className="font-semibold text-gray-200">Market Cap : </span>
            <span className="text-blue-400">$ {coin.market_cap.toLocaleString()}</span>
          </p>
          <p className="text-green-400">
            <span className="font-semibold text-gray-200">24 Hours Change : </span> 
              <span className="text-red-500 font-bold"> {coin.price_change_percentage_24h}%</span>
          </p>
          <p><span className="font-semibold text-gray-200">Market Cap Rank : </span> 
            <span className="text-purple-400"> {coin.market_cap_rank}</span>
          </p>
          <p><span className="font-semibold text-gray-200">High 24h : </span>
            <span className="text-green-500">$ {coin.high_24h.toLocaleString()}</span>
          </p>
          <p><span className="font-semibold text-gray-200">Low 24h:</span>
            <span className="text-red-500">$ {coin.low_24h.toLocaleString()}</span>
          </p>
          <p><span className="font-semibold text-gray-200">Last Updated : </span>
            <span className="text-gray-400"> {new Date(coin.last_updated).toLocaleString()}</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CoinDetail;
