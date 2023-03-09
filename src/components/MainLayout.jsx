import React from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

const MainLayout = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Outlet />
    </Box>
  )
}

export default MainLayout
