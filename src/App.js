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
    const data = { '2021-05-27': 10.004, '2021-05-28': 50000.302 }
    setBitcoinData(data)
  }, [])

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
