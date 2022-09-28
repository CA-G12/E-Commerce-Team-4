import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [status, setStatus] = useState('Unauthenticated');

  useEffect(() => {
    axios.get('/api/v1/check-login').then(({ data }) => setStatus(data.msg));
  }, []);

  return (
    <header>
      <nav>
        <p>SOQE</p>
        {status === 'authenticated' ? (
          <div>
            <ion-icon name="search-outline" />
            <ion-icon name="person-outline" />
            <Link to="cart">
              <ion-icon name="cart-outline" />
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
