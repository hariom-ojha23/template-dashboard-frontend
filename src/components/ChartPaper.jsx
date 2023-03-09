import React from 'react'
import { Paper, Typography } from '@mui/material'

const ChartPaper = ({ children, title }) => {
  return (
    <Paper
      sx={{
        overflow: 'hidden',
        borderRadius: 4,
        boxShadow: 4,
        p: 2,
      }}
    >
      <Typography variant="h5" component="h5" sx={{ mx: 2, mt: 1 }}>
        {title}
      </Typography>
      {children}
    </Paper>
  )
}

export default ChartPaper
