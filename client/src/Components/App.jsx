import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/signup',
    element: <div>login</div>,
  },
  {
    path: '/login',
    element: <div>login</div>,
  },
  {
    path: '/cart',
    element: <div>cart</div>,
  },
  {
    path: '/product/:productId',
    element: <div>product</div>,
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
