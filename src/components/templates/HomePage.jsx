import { useState, useEffect } from "react";
import TableCoin from "../modules/TableCoin";
import { API_KEY, getCoinList } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY,
      },
    };

    const getData = async () => {
      const res = await fetch(getCoinList(), options);
      const json = await res.json();
      setCoins(json);
      setIsLoading(false)
    };

    getData();
  }, []);

  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
