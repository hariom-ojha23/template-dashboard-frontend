import React, { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import './App.css'

import routes from './routes'

function App() {
  const authToken = localStorage.getItem('authToken')
    ? localStorage.getItem('authToken')
    : null

  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) {
      navigate('/authentication/login', { replace: true })
    } else {
      navigate('/app/dashboard', { replace: true })
    }
  }, [authToken])

  const content = useRoutes(routes)

  return content
}

export default App
