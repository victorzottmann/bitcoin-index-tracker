import React, { useState } from 'react'

import './App.css'
import CurrencySelector from './components/CurrencySelector'

const App = () => {
  const [currency, setCurrency] = useState('AUD')

  const handleCurrencyChange = (cur) => {
    console.log('Currency:', cur)
    setCurrency(cur)
  }

  return (
    <div>
      <h1>Bitcoin Index</h1>
      <CurrencySelector
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />
    </div>
  )
}

export default App
