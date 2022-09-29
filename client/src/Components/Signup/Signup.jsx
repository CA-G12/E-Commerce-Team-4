/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
import './Signup.css';

export default function Signup() {
  const [signupData, setSignupData] = useState();
  const [isSigned, setIsSigned] = useState(false);
  const [error, setError] = useState('');

  const validateSignup = (
    { name, username, email, password, passwordConf, country, address }
  ) => {
    const validateName = name !== '' && typeof name === 'string';
    const validateUsername = /^[a-zA-Z0-9]{3,30}$/.test(username);
    const validateEmail = /^[a-zA-z0-9]?.*@[a-zA-z0-9]{1,}.[a-zA-Z]{1,}$/.test(email);
    const validatePassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    const areTwoPassesMatch = password === passwordConf;
    const validateCountry = country !== '' && typeof name === 'string';
    const validateAddress = address !== '' && typeof name === 'string';
    
    console.log(
      areTwoPassesMatch, password, passwordConf
    );
    return (validateUsername && validateName && validateEmail) 
    && (validatePassword && areTwoPassesMatch && validateCountry && validateAddress);
  }

  const handleInput = (e) => {
    setSignupData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSignup(signupData)) {
      console.log('here');
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
    } else {
      setError('Invalid data!')
    }
  };

  return (
    <section className="signup-outer-cont">
      { (isSigned) && 
      <h1 className='success'>
        Signed up successfully <a href='/login'>Login</a>
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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
            />
          </label>
          <label htmlFor="signup-password-conf">
            Password confirmation:
            <input
              type="password"
              id="signup-password-conf"
              name="passwordConf"
              value={signupData?.passwordConf}
              placeholder="Provide your password confirmation"
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
            />
          </label>
          <button
            className="submit"
            type="submit"
            onClick={handleSubmit}
          >Submit</button>
        <h4 className="login">Already have account? <a href="/login">Login!</a></h4>
        </form>
      </section>
    </section>
  );
}
