import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Login/> 
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
