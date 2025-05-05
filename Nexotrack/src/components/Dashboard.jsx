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
    <div className='text-gray px-4 py-8 font-serif'>
      <div className="w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10 mt-10 font-serif">CRYPTOCURRENCIES</h2>
        <div className="flex justify-center mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-100 px-4 py-2 border border-black rounded-md bg-white"
          />
        </div>

        {loading ? (
          <div className="text-center text-lg text-gray-600">Loading...</div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white text-lg  tracking-wider">
                  <th className="px-6 py-4 border">LOGO</th>
                  <th className="px-6 py-4 border">NAME</th>
                  <th className="px-6 py-4 border">SYMBOL</th>
                  <th className="px-6 py-4 border">PRICE(USD)</th>
                  <th className="px-6 py-4 border">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin) => (
                  <tr key={coin.id} className="text-center hover:bg-gray-100 transition">
                    <td className="border px-4 py-3">
                      <img src={coin.image} alt={coin.name} className="w-8 h-8 mx-auto" />
                    </td>
                    <td className="border px-4 py-3">{coin.name}</td>
                    <td className="border px-4 py-3 uppercase">{coin.symbol}</td>
                    <td className="border border-black px-7 py-3 text-xl text-green-700">${coin.current_price.toLocaleString()}</td>
                    <td className="border px-4 py-3">
                      <button
                        onClick={() => setSelectedCoin(coin)}
                        className="text-m bg-gray-800 px-4 py-2 border text-white border-[#000000] transition-colors duration-500 rounded-xl hover:bg-gray-100 hover:text-[#000000] hover:border-[#000000]"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center gap-5 mt-4 mb-5">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="text-lg bg-gray-800 px-4 py-2 border text-white border-[#000000] transition-colors duration-500 rounded-xl hover:bg-gray-100  hover:text-[#000000] hover:border-[#000000]"
              >
                Previous
              </button>
              <span className="text-xl font-medium mt-4">{page}</span>
              <button
                onClick={handleNext}
                className="text-lg bg-gray-800 px-4 py-2 border text-white border-[#000000] transition-colors duration-500 rounded-xl hover:bg-gray-100 hover:text-[#000000] hover:border-[#000000]"
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
