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
        
        // Fetch detailed coin data for price changes
        const coinIds = data.coins.map(coin => coin.item.id).join(',');
        const detailRes = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24h`);
        const detailData = await detailRes.json();
        
        // Merge trending data with price data
        const mergedData = data.coins.map(coin => {
          const priceData = detailData.find(p => p.id === coin.item.id);
          return {
            ...coin,
            priceData
          };
        });
        
        setTrendingCoins(mergedData);
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
      <div className="min-h-screen bg-gray-900 text-white font-sans px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-black text-center mb-12 tracking-tight text-white">
            TRENDING CRYPTOCURRENCIES
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the most searched cryptocurrencies in the last 24 hours
            </p>
          </div>

          {loading ? (
            <p className="text-center text-lg text-gray-400">Loading trending coins...</p>
          ) : (
            <div className="bg-gray-800 border border-gray-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">#</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Coin</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Market Cap Rank</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">24h Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-600">
                    {trendingCoins.map(({ item, priceData }, index) => (
                      <tr key={item.id} className="hover:bg-gray-700 transition-all duration-300">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-bold">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img src={item.large} alt={item.name} className="w-10 h-10 mr-4" />
                            <div>
                              <div className="text-lg font-bold text-white">{item.name}</div>
                              <div className="text-sm text-gray-400 uppercase font-semibold">{item.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                            #{item.market_cap_rank || 'N/A'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                          {priceData ? (
                            <span className={`${priceData.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {priceData.price_change_percentage_24h >= 0 ? '+' : ''}{priceData.price_change_percentage_24h?.toFixed(2)}%
                            </span>
                          ) : (
                            <span className="text-gray-400">N/A</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-3">About Trending Coins</h3>
              <p className="text-gray-400">
                Trending coins are determined by search volume and user interest over the past 24 hours. 
                Higher scores indicate more searches and engagement from the crypto community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Trending;
