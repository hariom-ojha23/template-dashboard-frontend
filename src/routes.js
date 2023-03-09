import DashboardLayout from './components/DashboardLayout'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'

const routes = [
  {
    path: '/app',
    element: <DashboardLayout />,
    children: [{ path: 'dashboard', element: <Dashboard /> }],
  },
  {
    path: '/authentication',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]

export default routes
