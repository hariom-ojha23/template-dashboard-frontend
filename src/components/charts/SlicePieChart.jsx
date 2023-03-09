import React from 'react'
import { Chart } from 'react-google-charts'
import ChartPaper from '../ChartPaper'

export const options = {
  fontSize: 16,
  is3D: true,
}

const SlicePieChart = (props) => {
  return (
    <ChartPaper title="Pestel Count">
      <Chart
        chartType="PieChart"
        data={props.data}
        options={options}
        width={'100%'}
        height={'300px'}
      />
    </ChartPaper>
  )
}

export default React.memo(SlicePieChart)
