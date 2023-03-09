import React, { useEffect } from 'react'
import { Chart } from 'react-google-charts'
import ChartPaper from '../ChartPaper'

export const options = {
  pieHole: 0.3,
  is3D: false,
  fontSize: 16,
}

const PieChart = (props) => {
  return (
    <ChartPaper title="Sector Count">
      <Chart
        chartType="PieChart"
        width="100%"
        height="300px"
        data={props.data}
        options={options}
      />
    </ChartPaper>
  )
}

export default React.memo(PieChart)
