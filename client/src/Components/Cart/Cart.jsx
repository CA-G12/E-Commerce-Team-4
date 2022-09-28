import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Products from './Products/Products';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Cart() {
  const navigate = useNavigate();

  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/check-login').then(({ data }) => setStatus(data.msg));
  }, []);

  if (status === 'Unauthenticated') navigate('/');

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default Cart;
