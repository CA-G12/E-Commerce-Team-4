import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: 'hello@hello.com',
    password: 'root',
  });

  const handleInput = (e) => {
    setLoginData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

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
          <button className="submit" type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
}
