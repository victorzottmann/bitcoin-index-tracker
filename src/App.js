import React, { useState, useEffect } from 'react'

import './App.css'
import CurrencySelector from './components/CurrencySelector'
import DataDisplay from './components/DataDisplay'

const App = () => {
  const [currency, setCurrency] = useState('AUD')
  const [bitcoinData, setBitcoinData] = useState({})

  const handleCurrencyChange = (cur) => {
    console.log('Currency:', cur)
    setCurrency(cur)
  }

  useEffect(() => {
    console.log('In useEffect')
    fetch(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`
    )
      .then((res) => res.json())
      .then((data) => setBitcoinData(data.bpi))
      .catch((error) => console.log(error.message))
  }, [currency])

  return (
    <div>
      <h1>Bitcoin Index</h1>
      <CurrencySelector
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />
      <DataDisplay currency={currency} data={bitcoinData} />
    </div>
  )
}

export default App
