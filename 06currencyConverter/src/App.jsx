import { useState, useEffect, useCallback } from 'react'
import { InputBox } from './components'
import useCurrencyRate from './hooks/useCurrencyRate'

const backgroundImageUrl = "https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/exchange%20rate.jpeg"


function App() {
  const [amount, setAmount] = useState(0);
  const [convertFrom, setConvertFrom] = useState("USD");
  const [converTo, setConvertTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyRate = useCurrencyRate(convertFrom);
  const currencyOptions = Object.keys(currencyRate);

  function swapCurrency() {
    setConvertFrom(converTo);
    setConvertTo(convertFrom);
  }

  useEffect(() => {
    setConvertedAmount(amount * currencyRate[converTo] || 0)
  }, [amount, converTo, currencyRate])

  return (
    <>
      <div style={{backgroundImage: `url("${backgroundImageUrl}")`}} className='w-full h-screen flex flex-col justify-center items-center  gap-8'>

        <h1 className='text-center text-4xl text-slate-200 font-bold'>Currency Converter</h1>

        <div className='w-full max-w-xl relative bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded'>
          <InputBox label='From' amount={amount} onAmountChange={(amnt) => setAmount(amnt)} currencyOptions={currencyOptions} selectedCurrency={convertFrom} onSelectedCurrencyChange={(currency) => setConvertFrom(currency)} />

          <InputBox label='To' amount={convertedAmount} currencyOptions={currencyOptions.filter((item) => item !== convertFrom)} selectedCurrency={converTo} onSelectedCurrencyChange={(currency) => setConvertTo(currency)} isReadOnly={true} />

          <button className='bg-blue-700 text-white py-3 px-4 rounded absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' onClick={swapCurrency}>Swap</button>
        </div>
      </div>
    </>
  )
}

export default App
