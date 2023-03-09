import React from 'react'
import { Divider, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

const InfoBox = (props) => {
  return (
    <Paper
      sx={{
        height: 100,
        boxShadow: 4,
        borderRadius: 4,
        p: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: 75,
            height: 75,
            background: props.bg,
            position: 'absolute',
            left: 8,
            top: -30,
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {props.icon}
        </Box>

        <Box>
          <Typography
            component="p"
            variant="p"
            textAlign="right"
            sx={{ fontSize: 16, color: 'gray', fontWeight: 600 }}
          >
            {props.title}
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            textAlign="right"
            fontSize={28}
          >
            {props.count}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Typography component="h6" variant="h6" fontSize={14} sx={{ mt: 0.5 }}>
          {props.subtitle}
        </Typography>
      </Box>
    </Paper>
  )
}

export default InfoBox
