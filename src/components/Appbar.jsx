import React from 'react'
import { Avatar, Box, Toolbar, Typography } from '@mui/material'

const Appbar = () => {
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
  return (
    <Toolbar sx={{ mt: 2 }}>
      <Box sx={{ flexGrow: 1 }}>
        <h5 style={{ margin: 0, color: 'gray' }}>BlackCoffer</h5>
        <h3 style={{ margin: 0, fontWeight: 500 }}>Dashboard</h3>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 3 }}>
        <Avatar sx={{ backgroundColor: 'purple', fontSize: 16 }}></Avatar>
        <Typography
          component="h6"
          variant="h6"
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          {userData !== null && userData.fullName}
        </Typography>
      </Box>
    </Toolbar>
  )
}

export default Appbar
