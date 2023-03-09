import React from 'react'
import { Chart } from 'react-google-charts'
import ChartPaper from '../ChartPaper'

const DiffPieChart = (props) => {
  const diffdata = {
    old: props.data.endYear,
    new: props.data.startYear,
  }

  return (
    <ChartPaper title="Start & End Year">
      <Chart
        chartType="PieChart"
        width="100%"
        height="300px"
        diffdata={diffdata}
      />
    </ChartPaper>
  )
}

export default React.memo(DiffPieChart)
