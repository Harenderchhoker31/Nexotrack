import React from 'react';

const CoinDetail = ({ coin, onClose }) => {
  if (!coin) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="bg-gray-800 text-white border border-gray-600 rounded-3xl p-8 sm:p-12 max-w-4xl w-full mx-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400 transition"
        >
          ✖
        </button>

        <h2 className="text-4xl font-semibold text-center text-white mb-8">
          {coin.name} Details
        </h2>
        <div className="flex justify-center mt-8">
          <img src={coin.image} alt={coin.name} className="w-20 h-20 rounded-full shadow-xl border-2 border-gray-600 mb-20" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-lg text-gray-300 mb-8">
          <p><span className="font-semibold text-white">Symbol : </span> <span className="text-gray-300">{coin.symbol.toUpperCase()}</span></p>
          <p><span className="font-semibold text-white">Price : </span> 
            <span className="text-green-400 font-bold">$ {coin.current_price.toLocaleString()}</span>
          </p>
          <p><span className="font-semibold text-white">Market Cap : </span>
            <span className="text-blue-400">$ {coin.market_cap.toLocaleString()}</span>
          </p>
          <p>
            <span className="font-semibold text-white">24 Hours Change : </span> 
              <span className={`font-bold ${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}> {coin.price_change_percentage_24h}%</span>
          </p>
          <p><span className="font-semibold text-white">Market Cap Rank : </span> 
            <span className="text-gray-300"> {coin.market_cap_rank}</span>
          </p>
          <p><span className="font-semibold text-white">High 24h : </span>
            <span className="text-green-400">$ {coin.high_24h.toLocaleString()}</span>
          </p>
          <p><span className="font-semibold text-white">Low 24h:</span>
            <span className="text-red-400">$ {coin.low_24h.toLocaleString()}</span>
          </p>
          <p><span className="font-semibold text-white">Last Updated : </span>
            <span className="text-gray-300"> {new Date(coin.last_updated).toLocaleString()}</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CoinDetail;
