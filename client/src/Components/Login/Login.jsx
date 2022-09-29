import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [loginData, setLoginData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  axios.get('/api/v1/check-login').then(({ data }) => {
    if (data.msg === 'authenticated') {
      navigate('/');
    }
  });

  const handleInput = (e) => {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValidation = ({ email, password }) => {
    const isEmailValid = /^[a-zA-z0-9]?.*@[a-zA-z0-9]{1,}.[a-zA-Z]{1,}$/.test(
      email
    );
    const isPassValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
      password
    );
    return isEmailValid && isPassValid;
  };

  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    if (handleValidation(loginData)) {
      const { email, password } = loginData;
      axios
        .post('/api/v1/login', {
          email,
          password,
        })
        .then((data) => {
          if (data.data.msg !== 'login true') {
            setError('Wrong Password or email!');
          }
          setIsLogged(true);
          if (data.data.msg === 'login true') {
            navigate('/');
          }
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      setError('Invalid email address or password!!');
    }
  };

  return (
    <section className="login-outer-cont">
      {loginData.msg === 'login true' && (
        <h1 className="success">
          Logged in successfully
          <FaWindowClose
            className="close-icon"
            onClick={() => setIsLogged(false)}
          />
        </h1>
      )}
      {error && (
        <h1 className="error">
          Wrong password or email
          <FaWindowClose className="close-icon" onClick={() => setError('')} />
        </h1>
      )}
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
              onChange={handleInput}
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
              onChange={handleInput}
            />
          </label>
          <br />
          <button className="submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <h4 className="signup">
            Don&apos;t you have an account? <a href="/signup">Create one!</a>
          </h4>
        </form>
      </section>
    </section>
  );
}
