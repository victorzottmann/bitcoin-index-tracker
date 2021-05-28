import React from 'react'
import currencies from '../data/supported-currencies.json'

const CurrencySelector = (props) => {
  // assigning them as consts to props make them unchangeable
  const { currency, handleCurrencyChange } = props

  const handleSelectChange = (event) => {
    handleCurrencyChange(event.target.value)
  }

  return (
    <div>
      <span>Select your currency:</span>
      <br />
      <select onChange={handleSelectChange}>
        {currencies.map(({ currency, country }, index) => {
          return (
            <option key={`${index}-${currency}`} value={currency}>
              {country}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default CurrencySelector
