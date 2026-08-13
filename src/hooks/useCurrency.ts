import { useEffect, useState } from "react";

function useCurrency(currency: string): Record<string, number> {
  const [data, setData] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/f77379925d00ff4cf24aa184/latest/${currency.toUpperCase()}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setData(res.conversion_rates || {});
      })
      .catch((error) => {
        console.log("Currency API Error:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrency;