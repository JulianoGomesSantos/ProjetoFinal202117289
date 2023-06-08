import '../css/login.css';
import React, { useState, useEffect } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';
import api from '../config/api.jsx';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!login) {
      alert('Please enter your username or email');
      return;
    }

    if (!password) {
      alert('Please enter your password');
      return;
    }

    if (isEmail(login)) {
      doLogin({ email: login, password });
    } else {
      doLogin({ username: login, password });
    }
  };

  const doLogin = (params) => {
    api
      .post('/user/login', params)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);

        localStorage.setItem('user', JSON.stringify(response.data.user));

        navigate('/tasks');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isEmail = (login) => {
    if (login.includes('@')) {
      return true;
    }
    return false;
  };

  return (
    <div className="landing">
      <div className="login-container">
        <div className="login-right-container">
          <div className="login-inputs-container">
            <h1
              onClick={() =>
                window.location.replace(
                  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                )
              }
            >
              Login
            </h1>
            <div className="register-dual-input-container">
              <label>
                Your username or email
                <div className="password-icon">
                  <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Type to login"
                  />
                  <BsPersonFill color="#6735c8" size={'22px'} />
                </div>
              </label>
              <label>
                Your password
                <div className="password-icon">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Type your password"
                  />
                  <RiLockPasswordLine color="#6735c8" size={'22px'} />
                </div>
              </label>
            </div>
            <div
              className="dont-have-account-button"
              // onClick={() => handleCreateAccount()}
            >
              Sign Up
            </div>
            <div className="account-button" onClick={() => handleLogin()}>
              Sign In
            </div>
          </div>
        </div>
        <div className="landing-bar-container" />
      </div>
    </div>
  );
};
