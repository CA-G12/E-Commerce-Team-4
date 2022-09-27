import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Cart/Cart';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cart',
    element: <Cart />,
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
