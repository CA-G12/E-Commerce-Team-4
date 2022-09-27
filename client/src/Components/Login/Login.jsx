import { useState } from 'react';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [loginData, setLoginData] = useState({});
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

  if (error) return <h1 className="not-logged">Wrong password or email</h1>;
  if (isLogged || loginData.msg) return <h1 className='success'>Logged in successfully</h1>

  return (
    <section className="login-outer-cont">
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
