/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
import './Signup.css';

export default function Signup() {
  const [signupData, setSignupData] = useState();
  const [isSigned, setIsSigned] = useState(false);
  const [error, setError] = useState('');

  const handleInput = (e) => {
    setSignupData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, email, password, passwordConf, country, address } = signupData;
    axios.post('/api/v1/signup', {
      name,
      username,
      email,
      password,
      passwordConf,
      country,
      address,
    })
      .then((data) => {
        console.log(data);
        setIsSigned(true);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <section className="signup-outer-cont">
      { (isSigned) && 
      <h1 className='success'>
        Logged in successfully
        <FaWindowClose className="close-icon" onClick={() => setIsSigned(false)} />
      </h1> }
      { (error) && 
      <h1 className='error'>
        Wrong Data
        <FaWindowClose className="close-icon" onClick={() => setError('')} />
      </h1> }
      <section className="signup-inner-cont">
        <img
          className="signup-img"
          src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
          alt="signup design"
        />
        <form id="signup-form" method="post">
          <h1 className="signup-header">Create Account</h1>
          <label htmlFor="signup-name">
            Full name:
            <input
              type="text"
              id="signup-name"
              name="name"
              value={signupData?.name}
              placeholder="Provide your account name"
              onInput={handleInput}
            />
          </label>
          <label htmlFor="signup-username">
            Username:
            <input
              type="text"
              id="signup-username"
              name="username"
              value={signupData?.username}
              placeholder="Provide your account username"
              onInput={handleInput}
            />
          </label>
          <label htmlFor="signup-email">
            Email address:
            <input
              type="email"
              id="signup-email"
              name="email"
              value={signupData?.email}
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
              value={signupData?.password}
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
              value={signupData?.passwordConf}
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
              value={signupData?.country}
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
              value={signupData?.address}
              placeholder="Provide your address"
              onInput={handleInput}
            />
          </label>
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
