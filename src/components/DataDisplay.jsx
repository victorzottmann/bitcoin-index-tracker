import React from 'react'

const DataDisplay = ({ currency, data }) => {
  console.log(Object.entries(data))
  return (
    <div>
      <h2>Bitcon Index in {currency}</h2>
      {Object.entries(data).map((element) => {
        const [date, value] = element
        return (
          <div key={date}>
            Date: {date} Value: {value}
          </div>
        )
      })}
    </div>
  )
}

export default DataDisplay
