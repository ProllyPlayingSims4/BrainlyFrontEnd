import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

function App() {
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Dashboard/> 
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
