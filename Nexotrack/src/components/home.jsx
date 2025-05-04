import React, { useEffect, useState } from 'react';

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1')
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
      })
  }, []);

  return (
    <div>
      <h2>Cryptocurrencies</h2>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>
                <img src={coin.image} alt={coin.name} width="30" height="30" />
              </td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>${coin.current_price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
