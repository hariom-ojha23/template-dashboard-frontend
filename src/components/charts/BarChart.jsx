import React from 'react'
import ChartPaper from '../ChartPaper'
import { Chart } from 'react-google-charts'
import { Paper, Typography } from '@mui/material'

const BarChart = (props) => {
  return (
    <Paper sx={{ overflow: 'hidden', borderRadius: 4, boxShadow: 4, p: 2 }}>
      <Typography variant="h5" component="h5" sx={{ mx: 2, mt: 1, mb: 2 }}>
        Pestel Intensity
      </Typography>
      <Chart
        chartType="Bar"
        width="100%"
        height="350px"
        data={props.data}
        options={{ colors: ['#4CAF50'] }}
      />
    </Paper>
  )
}

export default React.memo(BarChart)
