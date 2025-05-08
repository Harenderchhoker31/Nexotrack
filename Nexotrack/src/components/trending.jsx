import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await res.json();
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-black text-white px-4 py-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
          🚀 Trending Cryptocurrencies
        </h1>

        {loading ? (
          <p className="text-center text-gray-400 text-lg">Loading trending coins...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingCoins.map(({ item }) => (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center shadow-md hover:shadow-lg transition"
              >
                <img src={item.small} alt={item.name} className="w-12 h-12 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400 text-sm uppercase">{item.symbol}</p>
                  <p className="text-green-400 text-sm mt-1">
                    Market Cap Rank: #{item.market_cap_rank}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Trending;
