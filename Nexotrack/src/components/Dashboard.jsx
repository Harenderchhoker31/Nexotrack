import React, { useEffect, useState } from 'react';


const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
  }, [page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 text-gray px-4 py-8">
      <div className="w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Cryptocurrencies</h2>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-72 px-4 py-2 border border-gray-300 rounded-md bg-white"
          />
        </div>

        {loading ? (
          <div className="text-center text-lg text-gray-600">Loading...</div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 border">Logo</th>
                  <th className="px-6 py-4 border">Name</th>
                  <th className="px-6 py-4 border">Symbol</th>
                  <th className="px-6 py-4 border">Price (USD)</th>
                  <th className="px-6 py-4 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin) => (
                  <tr key={coin.id} className="text-center hover:bg-gray-100 transition">
                    <td className="border px-4 py-3">
                      <img src={coin.image} alt={coin.name} className="w-6 h-6 mx-auto" />
                    </td>
                    <td className="border px-4 py-3">{coin.name}</td>
                    <td className="border px-4 py-3 uppercase">{coin.symbol}</td>
                    <td className="border px-4 py-3 font-medium">${coin.current_price.toLocaleString()}</td>
                    <td className="border px-4 py-3">
                      <button
                        onClick={() => setSelectedCoin(coin)}
                        className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
              >
                Previous
              </button>
              <span className="text-lg font-medium">{page}</span>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {selectedCoin && (
          <div className="mt-10 bg-white border-t pt-6 px-6 py-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Details for {selectedCoin.name}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <p><span className="font-semibold">Symbol:</span> {selectedCoin.symbol.toUpperCase()}</p>
              <p><span className="font-semibold">Current Price:</span> ${selectedCoin.current_price.toLocaleString()}</p>
              <p><span className="font-semibold">Market Cap:</span> ${selectedCoin.market_cap.toLocaleString()}</p>
              <p><span className="font-semibold">24h Change:</span> {selectedCoin.price_change_percentage_24h}%</p>
            </div>
            <div className="flex justify-center mt-6">
              <img
                src={selectedCoin.image}
                alt={selectedCoin.name}
                className="w-12 h-12"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
