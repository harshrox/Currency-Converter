import React, {useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
}){
    const amountInputId = useId();
    const currencyInputId = useId();
    
    return(
        <div className="bg-slate-900 py-4 px-2 md:py-7 md:px-4 rounded-lg flex gap-10 font-mono text-white border border-dashed border-gray-700">
            <div className="w-1/2 flex flex-col">
                <label htmlFor={amountInputId} className="">
                    {label}
                </label>
                <input 
                    id={amountInputId}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    className="text-black rounded-md px-2 h-6 w-full"
                />
            </div>
            <div className="w-1/2 flex flex-col">
                <label htmlFor={currencyInputId} className="">
                    Currency
                </label>
                <select 
                    id={currencyInputId}
                    value={selectedCurrency}
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="text-black rounded-md px-2 h-6 w-full">

                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                        
                </select>
            </div>
        </div>
    );
}

export default InputBox;