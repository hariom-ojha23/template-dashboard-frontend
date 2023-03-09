import { Paper, Typography } from '@mui/material'
import React from 'react'
import { Chart } from 'react-google-charts'
import ChartPaper from '../ChartPaper'

export const options = {
  hAxis: { title: 'Region', titleTextStyle: { color: '#333' } },
  vAxis: { minValue: 0 },
  chartArea: { width: '70%', height: '70%' },
  colors: ['#e91e63'],
}

const AreaChart = (props) => {
  return (
    <Paper
      sx={{ overflow: 'hidden', borderRadius: 4, boxShadow: 4, p: 2, pb: 3 }}
    >
      <Typography variant="h5" component="h5" sx={{ mx: 2, mt: 1, mb: 2 }}>
        Likelihood Of Regions
      </Typography>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={props.data}
        options={options}
      />
    </Paper>
  )
}

export default React.memo(AreaChart)
