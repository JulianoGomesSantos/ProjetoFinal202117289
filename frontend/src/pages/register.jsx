import '../css/register.css';
import React, { useState, useEffect } from 'react';
import {
  BsEyeSlashFill,
  BsEyeSlash,
  BsPersonFill,
  BsFileImage,
} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserNinja } from 'react-icons/fa';
import api from '../config/api.jsx';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const [showReturn, setShowReturn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [repeatPasswordType, setRepeatPasswordType] = useState('password');
  const [passwordIcon, setPasswordIcon] = useState(
    <BsEyeSlashFill size={'22px'} onClick={() => handlePassword(true)} />
  );
  const [repeatPasswordIcon, setRepeatPasswordIcon] = useState(
    <BsEyeSlashFill size={'22px'} onClick={() => handleRepeatPassword(true)} />
  );

  const [passColor, setPassColor] = useState('#424242');
  const [emailColor, setEmailColor] = useState('#424242');
  const [usernameColor, setUsernameColor] = useState('#424242');

  const handlePassword = (state) => {
    if (state) {
      setPasswordType('password');
      setShowPassword(false);
      setPasswordIcon(
        <BsEyeSlashFill size={'22px'} onClick={() => handlePassword(false)} />
      );
    } else {
      setPasswordType('text');
      setShowPassword(true);
      setPasswordIcon(
        <BsEyeSlash size={'22px'} onClick={() => handlePassword(true)} />
      );
    }
    setShowPassword(!showPassword);
  };
  const handleRepeatPassword = (state) => {
    if (state) {
      setRepeatPasswordType('password');
      setShowRepeatPassword(false);
      setRepeatPasswordIcon(
        <BsEyeSlashFill
          size={'22px'}
          onClick={() => handleRepeatPassword(false)}
        />
      );
    } else {
      setRepeatPasswordType('text');
      setShowRepeatPassword(true);
      setRepeatPasswordIcon(
        <BsEyeSlash size={'22px'} onClick={() => handleRepeatPassword(true)} />
      );
    }
    setShowRepeatPassword(!showRepeatPassword);
  };

  useEffect(() => {
    if (password != repeatPassword) {
      return setPassColor('#ff3 000');
    }

    if (password == '') {
      return setPassColor('#424242');
    }
    return setPassColor('#00e676');
  }, [password, repeatPassword]);

  useEffect(() => {
    api
      .post('/user/get', { username: username })
      .then((res) => {
        setUsernameColor('#ff3000');

        return;
      })
      .catch(() => {
        setUsernameColor('#424242');
      });
  }, [username]);

  useEffect(() => {
    api
      .post('/user/get', { email: email })
      .then((res) => {
        setEmailColor('#ff3000');

        return;
      })
      .catch(() => {
        setEmailColor('#424242');
      });
  }, [email]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReturn(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const handleCreateAccount = () => {
    if (password != repeatPassword) {
      return alert('Passwords does not match');
    }

    if (password.length < 8) {
      return alert('Password must be have at least 8 characters');
    }

    if (!name) {
      return alert('Name is required');
    }

    if (!email) {
      return alert('Email is required');
    }

    if (emailColor == '#ff3000') {
      return alert('Email already in use');
    }

    if (!username) {
      return alert('Username is required');
    }

    if (usernameColor == '#ff3000') {
      return alert('Username already in use');
    }

    if (!password) {
      return alert('Password is required');
    }

    if (!repeatPassword) {
      return alert('Repeat password is required');
    }

    api
      .post('/user/create', {
        name: name,
        email: email,
        username: username,
        password: password,
        profile_image: profileImage,
      })
      .then((res) => {
        if (res.data) {
          alert('Account created successfully');
          navigate('/login');
        } else {
          alert(res.data);
        }
      });
  };

  return (
    <div className="landing">
      <div className="register-container">
        <div className="banana" />
        {showReturn && (
          <div className="register-left-container">
            <div className="register-inputs-container">
              <h1
                onClick={() =>
                  window.location.replace(
                    'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                  )
                }
              >
                Sign Up
              </h1>
              <div className="register-dual-input-container">
                <label>
                  Your name
                  <div className="password-icon">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Type your name"
                    />
                    <BsPersonFill size={'22px'} />
                  </div>
                </label>
                <label>
                  Your email
                  <div className="password-icon">
                    <input
                      type="text"
                      value={email}
                      style={{ borderBottomColor: emailColor }}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Type your email"
                    />
                    <AiOutlineMail size={'22px'} />
                  </div>
                </label>
              </div>
              <div className="register-dual-input-container">
                <label>
                  Your username
                  <div className="password-icon">
                    <input
                      type="text"
                      style={{ borderBottomColor: usernameColor }}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Type your username"
                    />
                    <FaUserNinja size={'22px'} />
                  </div>
                </label>
                <label>
                  Your profile image url
                  <div className="password-icon">
                    <input
                      type="text"
                      value={profileImage}
                      onChange={(e) => setProfileImage(e.target.value)}
                      placeholder="Use an image URL"
                    />
                    <BsFileImage size={'22px'} />
                  </div>
                </label>
              </div>
              <div className="register-dual-input-container">
                <label>
                  Your password
                  <>
                    <div className="password-icon">
                      <input
                        type={passwordType}
                        style={{ borderBottomColor: passColor }}
                        value={password}
                        placeholder="Type your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {passwordIcon}
                    </div>
                  </>
                </label>
                <label>
                  Repeat password
                  <div className="password-icon">
                    <input
                      type={repeatPasswordType}
                      style={{ borderBottomColor: passColor }}
                      placeholder="Repeat your password"
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    {repeatPasswordIcon}
                  </div>
                </label>
              </div>
              <div
                className="account-button"
                onClick={() => handleCreateAccount()}
              >
                Sign Up
              </div>
            </div>
          </div>
        )}
        <div className="landing-bar-container-animated" />
      </div>
    </div>
  );
};
