import './App.css';
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Header from './LandingPage/Header/Header';
import Footer from './LandingPage/Footer/Footer';
// import LandingPage from './LandingPage/LandingPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LandingPage />,

//   },
// ]);

function App() {
  return (
    <div className="App">
      <Header />
      {/* <LandingPage /> */}
      <Footer />
    </div>
  );
}

export default App;
