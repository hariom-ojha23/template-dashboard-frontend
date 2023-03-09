import React, { useState } from 'react'
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  Person,
  Notifications,
  CurrencyRupee,
  Logout,
} from '@mui/icons-material'

const DashboardSidebar = () => {
  const [selectedNav, setSelectedNav] = useState(0)

  const light = '#f0f2f5'
  const navItem = ['Dashboard', 'Notification', 'Billing', 'Account', 'Logout']
  const navIcon = [
    <DashboardIcon htmlColor={light} />,
    <Notifications htmlColor={light} />,
    <CurrencyRupee htmlColor={light} />,
    <Person htmlColor={light} />,
    <Logout htmlColor={light} />,
  ]

  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

  return (
    <Box className="sidebar-container">
      <Box
        sx={{
          borderRadius: 4,
          height: '98%',
          width: '95%',
        }}
        className="sidebar"
      >
        <Typography
          component="h5"
          variant="h5"
          letterSpacing={1.2}
          sx={{ color: light, my: 4, fontSize: 20 }}
        >
          BlackCoffer
        </Typography>
        <Divider sx={{ width: '90%', backgroundColor: 'gray' }} />

        <Box sx={{ width: '90%' }}>
          <List>
            {navItem.map((item, i) => (
              <ListItem
                sx={{
                  borderRadius: 4,
                  background:
                    selectedNav === i
                      ? 'linear-gradient(#49a3f1, #1A73E8)'
                      : 'transparent',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedNav(i)}
              >
                <ListItemIcon>{navIcon[i]}</ListItemIcon>
                <ListItemText primary={item} sx={{ color: light }} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              color: light,
              my: 4,
              fontSize: 16,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              textAlign: 'center',
            }}
          >
            {userData !== null && userData.fullName}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardSidebar
