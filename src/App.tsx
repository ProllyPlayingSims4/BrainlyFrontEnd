import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

function App() {
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Login/> 
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: "/home",
    element: <Dashboard/>
  }
])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
