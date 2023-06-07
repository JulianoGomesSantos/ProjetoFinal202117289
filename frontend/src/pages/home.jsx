import '../css/landing.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  function handleRegister() {
    navigate('/register');
  }

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-text-container">
          <span className="make-span">MAKE</span>
          <span className="day-span">YOUR DAY</span>
          <>
            <p className="productive-p">
              <span className="more-span">MORE</span> PRODUCTIVE
            </p>
          </>
          <div className="login-button" onClick={() => handleLogin()}>
            LOGIN
          </div>
          <div className="create-button" onClick={() => handleRegister()}>
            CREATE ACCOUNT
          </div>
        </div>
      </div>
      <div className="landing-bar-container" />
    </div>
  );
};
