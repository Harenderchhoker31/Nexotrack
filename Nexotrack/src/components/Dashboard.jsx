import React, { useEffect, useState, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { fetchCoins } from '../api/coinGecko';
import CoinDetail from './coindetail';


const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCoins = async () => {
      setLoading(true);
      try {
        const data = await fetchCoins(page);
        setCoins(data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      } finally {
        setLoading(false);
      }
    };

    getCoins();
  }, [page]);

  const filteredCoins = useMemo(() => 
    coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ), [coins, search]
  );

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gray-900 text-white font-sans px-6 py-12">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl sm:text-6xl font-black text-center mb-12 tracking-tight text-white">
        CRYPTOCURRENCIES
      </h1>

      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="🔍 Search coin..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-lg px-6 py-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium shadow-lg rounded-xl"
        />
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-400">Fetching data...</p>
      ) : (
        <div>
          <div className="bg-gray-800 border border-gray-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">#</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Coin</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">24h Change</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Market Cap</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {filteredCoins.map((coin, index) => (
                    <tr key={coin.id} className="hover:bg-gray-700 transition-all duration-300">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {(page - 1) * 100 + index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-white">{coin.name}</div>
                            <div className="text-sm text-gray-400 uppercase">{coin.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-400">
                        ${coin.current_price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                        <span className={`${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {coin.price_change_percentage_24h >= 0 ? '+' : ''}{coin.price_change_percentage_24h?.toFixed(2)}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        ${coin.market_cap?.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedCoin(coin)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 py-8 mt-8">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-indigo-500/25 transform hover:scale-105 disabled:transform-none rounded-lg"
            >
              ◀ Previous
            </button>
            <span className="text-white font-bold text-xl flex items-center px-4">{page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-indigo-500/25 transform hover:scale-105 rounded-lg"
            >
              Next ▶
            </button>
          </div>
        </div>
      )}

      {selectedCoin && (
        <CoinDetail coin={selectedCoin} onClose={() => setSelectedCoin(null)} />
      )}

    </div>
  </div>
  <Footer/>
  </div>

  );
};

export default Dashboard;
