import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from './Appbar'
import DashboardSidebar from './DashboardSidebar'
import { Box, Grid } from '@mui/material'

const DashboardLayout = () => {
  return (
    <Box
      className="container"
      sx={{
        width: '99vw',
      }}
    >
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <DashboardSidebar />
      </Box>

      <Box
        sx={{
          marginLeft: { xs: 0, lg: '280px' },
        }}
      >
        <Appbar />
        <Box sx={{ p: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout
