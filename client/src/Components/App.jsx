import './App.css';
import Cart from './Cart/Cart';
 import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
 import Header from './LandingPage/Header/Header';
 import Footer from './LandingPage/Footer/Footer';
 import LandingPage from './LandingPage/LandingPage';


 const router = createBrowserRouter([
  {
    path: '/',
     element: <LandingPage />,

   },
 ]);

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
      <Cart />
      <LandingPage /> 
       <Footer /> 
      <RouterProvider router={router} />
    </div>
  )
}

export default App
