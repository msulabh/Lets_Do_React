import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((currencyValue) => currencyValue.json())
      .then((currencyValue) => {
        setData(currencyValue["rates"]);
      });
  }, [currency]);
  return data;
}

export default UseCurrencyInfo;
