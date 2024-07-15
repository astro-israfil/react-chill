import {useId} from 'react';

const InputBox = ({
    label = "",
    amount,
    onAmountChange,
    currencyOptions = ["USD"],
    selectedCurrency,
    onSelectedCurrencyChange,
    isAmountDisabled = false,
    isReadOnly = false,
}) => {

  const amountFieldId = useId();
  return (
    <div className='w-full flex flex-wrap items-stretch gap-6 p-4'>
        <div className='flex flex-col gap-3 flex-1'>
            <label htmlFor={amountFieldId}>{label}</label>
            <input type="number" id={amountFieldId} className='w-full' value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} disabled={isAmountDisabled} readOnly={isReadOnly} />
        </div>
        <div className='flex flex-col gap-3 justify-end'>
            <select name="currency" value={selectedCurrency} onChange={(e) => onSelectedCurrencyChange && onSelectedCurrencyChange(e.target.value)}>
                {currencyOptions.map((currency) => (
                    <option value={currency} key={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox