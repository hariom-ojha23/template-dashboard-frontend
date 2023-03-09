import React from 'react'
import { Box } from '@mui/material'
import { Chart } from 'react-google-charts'
import ChartPaper from '../ChartPaper'

const LineChart = (props) => {
  const options = {
    curveType: 'function',
  }
  return (
    <ChartPaper title="Sector Intensity">
      <Box sx={{ pb: 2 }}>
        <Chart
          chartType="LineChart"
          width="100%"
          height="350px"
          data={props.data}
          options={options}
        />
      </Box>
    </ChartPaper>
  )
}

export default React.memo(LineChart)
