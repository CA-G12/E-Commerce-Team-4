import { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [signupData, setSignupData] = useState({
    username: 'mos',
    name: 'Mustafa Salem',
    email: 'hello@hello.com',
    password: 'hi',
    passwordConf: 'hi',
    country: 'Palestine',
    address: 'Gaza',
  });

  const handleInput = (e) => {
    setSignupData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  return (
    <section className="signup-outer-cont">
      <section className="signup-inner-cont">
        <img
          className="signup-img"
          src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
          alt="signup design"
        />
        <form id="signup-form" method="post">
          <h1 className="signup-header">Create Account</h1>
          <label htmlFor="signup-username">
            Username:
            <input
              type="text"
              id="signup-username"
              name="username"
              value={signupData.username}
              placeholder="Provide your account username"
              onInput={handleInput}
            />
          </label>
          <label htmlFor="signup-name">
            Full name:
            <input
              type="text"
              id="signup-name"
              name="name"
              value={signupData.name}
              placeholder="Provide your account name"
              onInput={handleInput}
            />
          </label>
          <label htmlFor="signup-email">
            Email address:
            <input
              type="email"
              id="signup-email"
              name="email"
              value={signupData.email}
              placeholder="Provide your account email"
              onInput={handleInput}
            />
          </label>
          <label htmlFor="signup-password">
            Account password:
            <input
              type="password"
              id="signup-password"
              name="password"
              value={signupData.password}
              placeholder="Provide your account password"
              onInput={handleInput}
            />
          </label>
          <label htmlFor="signup-password-conf">
            Password confirmation:
            <input
              type="password"
              id="signup-password-conf"
              name="passwordCont"
              value={signupData.passwordConf}
              placeholder="Provide your password confirmation"
              onInput={handleInput}
            />
          </label>
          <label htmlFor="signup-country">
            Country:
            <input
              type="text"
              id="signup-country"
              name="country"
              value={signupData.country}
              placeholder="Provide your country"
              onInput={handleInput}
            />
          </label>
          <label htmlFor="signup-address">
            Address:
            <input
              type="text"
              id="signup-address"
              name="address"
              value={signupData.address}
              placeholder="Provide your address"
              onInput={handleInput}
            />
          </label>
          <button className="submit" type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
}
