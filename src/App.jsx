import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import swapImg from './assets/swap.svg'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className='min-h-screen w-full flex flex-col justify-center items-center font-mono text-white'>
        <div className='text-xl md:text-3xl my-10 md:my-26 border-b border-blue-900'>Currency Converter</div>
        <div className='md:w-1/3'>
          <form  onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            {/* InputBox 'From' */}
            <div className='mb-2'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => {
                  setFrom(currency)
                }}
                selectedCurrency={from}
              />
            </div>
            {/* Swap Button */}
            <div className='flex justify-center items-center'>
              <button
                type="button"
                onClick={swap}
                className='bg-blue-900 hover:bg-blue-800 px-3 rounded-md absolute h-7'>
                  <img src={swapImg} alt="Swap" className='w-full h-full'/>
              </button>
            </div>
            {/* InputBox 'To' */}
            <div className='mt-2 mb-10'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                amountDisable
                onCurrencyChange={(currency) => {
                  setTo(currency)
                }}
                selectedCurrency={to}
              />
            </div>
            {/* Convert Button */}
            <div className='flex justify-center items-center'>
              <button type="submit" className='bg-blue-900 hover:bg-blue-800 px-3 py-1 rounded-md text-black'>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
