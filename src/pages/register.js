import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import SnackBar from '../components/SnackBar'
import axios from 'axios'
import API_SERVICE from '../URI'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [snackOpen, setSnackOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('success')

  const navigate = useNavigate()

  const verifyEmail = (enteredEmail) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(enteredEmail)
  }

  const verifyData = () => {
    if (fullName === '') {
      setMessage('Full Name cannot be empty')
      setVariant('error')
      setSnackOpen(true)
      return false
    } else if (email === '' || !verifyEmail(email)) {
      setMessage('Invalid Email')
      setVariant('error')
      setSnackOpen(true)
      return false
    } else if (password === '' || password.length < 6) {
      setMessage('Password must be atleast 6 characters long')
      setVariant('error')
      setSnackOpen(true)
      return false
    }

    return true
  }

  const register = async () => {
    try {
      if (verifyData()) {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        const body = {
          fullName,
          email,
          password,
        }

        const { data } = await axios.post(
          `${API_SERVICE}/api/v1/main/register`,
          body,
          config
        )

        if (data) {
          const { userData, token } = data
          localStorage.setItem('authToken', token)
          localStorage.setItem('userData', JSON.stringify(userData))

          setMessage('Registration Successfull')
          setVariant('success')
          setSnackOpen(true)
          navigate('/app/dashboard', { replace: true })
        }
      }
    } catch (error) {
      setMessage(error.message)
      setVariant('error')
      setSnackOpen(true)
    }
  }

  const snackClose = () => {
    setSnackOpen(false)
  }

  return (
    <Grid sx={{ height: '100vh' }} container component='main'>
      <Grid item md={7} sm={6} className='auth-bg' />
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ pt: 4, px: { lg: 10, xs: 4, md: 6 } }}
      >
        <Box className='auth-form-container'>
          <Avatar sx={{ backgroundColor: 'purple' }}>
            <LockOutlined />
          </Avatar>

          <Typography component='h4' variant='h4' sx={{ mt: 3, mb: 5 }}>
            Black Coffer
          </Typography>

          <TextField
            autoFocus
            margin='normal'
            fullWidth
            id='name'
            label='Full Name'
            type='name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            margin='normal'
            fullWidth
            id='email'
            label='Email Address'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin='normal'
            fullWidth
            id='password'
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant='contained'
            sx={{ py: 1.4, my: 3, fontSize: 16, fontWeight: 600 }}
            onClick={register}
          >
            Register
          </Button>

          <Link to='/authentication/login'>
            Already have an account ? Login
          </Link>
        </Box>
      </Grid>
      <SnackBar
        snackOpen={snackOpen}
        message={message}
        variant={variant}
        snackClose={snackClose}
      />
    </Grid>
  )
}

export default Register
