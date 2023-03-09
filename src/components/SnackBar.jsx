import React from 'react'
import { Snackbar, Alert, IconButton } from '@mui/material'

const SnackBar = (props) => {
  return (
    <Snackbar
      open={props.snackOpen}
      autoHideDuration={3000}
      onClose={props.snackClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        variant="filled"
        onClose={props.snackClose}
        severity={props.variant}
        sx={{ width: '100%' }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default SnackBar
