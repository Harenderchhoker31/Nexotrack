// src/api/coinApi.js

export const fetchMarketCoins = async (currency = "usd") => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      if (!res.ok) throw new Error("API fetch failed");
      return await res.json();
    } catch (err) {
      console.error("Fetch Error:", err);
      return [];
    }
  };
  