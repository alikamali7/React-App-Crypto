const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-5eJLiPNGLoTNGnpD2bw9M7Vo"

const getCoinList = () => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1`;
};

export { getCoinList, API_KEY };
