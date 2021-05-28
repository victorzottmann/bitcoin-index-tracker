import React from 'react'
import { Line, Chart } from 'react-chartjs-2'

const DataDisplay = ({ currency, data }) => {
  Chart.defaults.font.color = '#000'
  Chart.defaults.font.size = 16

  function formatChartData() {
    return {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Bitcoin',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: Object.values(data),
        },
      ],
    }
  }

  return (
    <div>
      <h2>Bitcon Index in {currency}</h2>
      <div style={{ margin: '1rem' }}>
        <Line data={formatChartData()} />
      </div>
      {/* {Object.entries(data).map((element) => {
        const [date, value] = element
        return (
          <div key={date}>
            Date: {date} Value: {value}
          </div>
        )
      })} */}
    </div>
  )
}

export default DataDisplay
