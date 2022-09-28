import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [loginData, setLoginData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');

  const handleInput = (e) => {
    setLoginData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    axios.post('/api/v1/login', {
      email,
      password,
    })
      .then((data) => {
        console.log(data);
        setIsLogged(true);
      })
      .catch((err) => {
        setError(err);
      });
  };


  return (
    <section className="login-outer-cont">
    { (loginData.msg === 'login true') && 
    <h1 className='success'>
      Logged in successfully
      <FaWindowClose className="close-icon" onClick={() => setIsLogged(false)} />
    </h1> }
    { (error) && 
    <h1 className='error'>
      Wrong password or email
      <FaWindowClose className="close-icon" onClick={() => setError('')} />
    </h1> }
      <section className="login-inner-cont">
        <img
          className="login-image"
          src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
          alt="login design"
        />
        <form id="login-form" method="post">
          <h1 className="login-header">Log in</h1>
          <label htmlFor="login-email">
            Email address:
            <input
              type="email"
              id="login-email"
              name="email"
              value={loginData.email}
              placeholder="Provide your account email"
              onInput={handleInput}
            />
          </label>
          <br />
          <label htmlFor="login-email">
            Account password:
            <input
              type="password"
              id="login-password"
              name="password"
              value={loginData.password}
              placeholder="Provide your account password"
              onInput={handleInput}
            />
          </label>
          <br />
          <button
            className="submit"
            type="submit"
            onClick={handleSubmit}
          >Submit</button>
        </form>
      </section>
    </section>
  );
}
