import React from 'react'
import { Chart } from 'react-google-charts'

export const options = {
  colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
  datalessRegionColor: '#f8bbd0',
  defaultColor: '#f5f5f5',
}
const GeoChart = (props) => {
  props.data.map((x) => {
    if (x[0] === 'United States of America') {
      x[0] = 'United States'
    }
  })
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="100%"
      data={props.data}
      options={options}
    />
  )
}

export default React.memo(GeoChart)
