/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import('./Product.css');

function Product({ obj }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/check-login').then(({ data }) => setStatus(data.msg));
  }, []);

  const addToCart = (id) => {
    console.log(id, status);

    if (status === 'authenticated') {
      axios.post('/api/v1/cart', { productId: id });
      navigate('/cart');
    } else navigate('/login');
  };

  return (
    <div className="card">
      <p className="category">{obj.category}</p>
      <img src={obj.product_img} alt={obj.name} />
      <div className="card-body">
        <div className="row">
          <div className="card-title">
            <h4>{obj.name}</h4>
            <h3>${obj.price}</h3>
          </div>
          <div className="view-btn">
            <Link to={`product/${obj.id}`}>View Details</Link>
          </div>
        </div>
        <hr />
        <p>{obj.description}</p>
        <div className="btn-group">
          <div className="btn">
            {status === 'authenticated' ? (
              <Link to="cart" onClick={() => addToCart(obj.id)}>
                add to cart
              </Link>
            ) : (
              <Link to="login">add to cart</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
