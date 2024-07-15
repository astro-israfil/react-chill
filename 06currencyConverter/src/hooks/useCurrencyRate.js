import { useState, useEffect } from "react";

const useCurrencyRate = (currency) => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_uA4cMtEaZInNH89sosZKuWbYdWbiPCJTEoKbYj8K&currencies=&base_currency=${currency}`).then(res => res.json())
        .then(res => setData(res.data))
    }, [currency]);

    return data;
}

export default useCurrencyRate