import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [status, setStatus] = useState('Unauthenticated');

  useEffect(() => {
    axios.get('/api/v1/check-login').then(({ data }) => setStatus(data.msg));
  }, []);

  const logout = () => {
    axios.get('/api/v1/logout').then(() => setStatus('Unauthenticated'));
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <p>SOQE</p>
        </Link>
        {status === 'authenticated' ? (
          <div className="icons">
            <ion-icon name="search-outline" />
            <ion-icon name="person-outline" />
            <Link to="cart" style={{ margin: '0' }}>
              <ion-icon name="cart-outline" />
            </Link>
            <Link to="/" onClick={logout}>
              logout
            </Link>
          </div>
        ) : (
          <div className="btn">
            <Link to="/login">login</Link>
            <Link to="/signup">signup</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
