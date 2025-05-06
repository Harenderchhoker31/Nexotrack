import React, { useEffect, useState } from 'react';
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

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gray-950 text-white font-sans px-4 py-10">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
        CRYPTOCURRENCIES
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="🔍 Search coin..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-400">Fetching data...</p>
      ) : (
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
          <table className="w-full text-center text-sm sm:text-base">
            <thead className="bg-gray-800 text-white uppercase tracking-wider">
              <tr>
                <th className="py-4">Logo</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-t border-gray-800 hover:bg-gray-800 transition"
                >
                  <td className="py-3">
                    <img src={coin.image} alt={coin.name} className="w-7 h-7 mx-auto" />
                  </td>
                  <td className="py-3 font-medium">{coin.name}</td>
                  <td className="py-3 text-gray-400 uppercase">{coin.symbol}</td>
                  <td className="py-3 text-green-400 font-semibold">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  <td className="py-3">
                    <button
                      onClick={() => setSelectedCoin(coin)}
                      className="px-4 py-2 rounded-full bg-blue-600  transition text-white text-sm hover:bg-green-400"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center gap-6 py-6 bg-gray-900">
            <button
              onClick={() => (page==1)?(setPage((p)=>p=1)):(setPage((p)=>p-1))}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-white"
            >
              ◀ Previous
            </button>
            <span className="text-white font-semibold">{page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-white"
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
