
export const fetchCoins = async (page = 1) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch coins');
    }
    return await response.json();
  };
  