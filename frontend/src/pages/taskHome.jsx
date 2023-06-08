import { Navbar } from '../components/bar';
import '../css/home.css';
import { Card } from '../components/card';
import api from '../config/api';
import { useEffect, useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AllClear } from '../components/allClear';

function TaskHome() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState([]);

  const getCurrentCompletedState = () => {
    if (localStorage.getItem('completedState') == 'true') {
      return (
        <MdCheckBox
          size={'32px'}
          color="#672bde"
          onClick={() => saveCompletedState(false)}
        />
      );
    }

    return (
      <MdCheckBoxOutlineBlank
        size={'32px'}
        color="#672bde"
        onClick={() => saveCompletedState(true)}
      />
    );
  };

  const getCurrentCompleted = () => {
    if (localStorage.getItem('completedState') == 'true') {
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }

    return;
  }, []);

  const { id } = JSON.parse(localStorage.getItem('user')) || { id: 0 };

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    api
      .get(`/task/list/${id}/${getCurrentCompleted()}`, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setCardList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [completed]);

  const saveCompletedState = (params) => {
    localStorage.setItem('completedState', params);
    setCompleted(params);
    return;
  };
  const hasTasks = () => {
    if (cardList.length == 0) {
      return (
        <div className="card-container">
          <div className="header-card-container">
            {getCurrentCompletedState()}
            Show completed cards
          </div>
          <AllClear />
        </div>
      );
    }

    if (cardList.length > 0) {
      return (
        <div className="card-container">
          <span>
            <div>
              {getCurrentCompletedState()}
              <h4>List completed tasks?</h4>
            </div>
            <h3>Task List</h3>
            <p>Priority</p>
          </span>
          {cardList.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              task={item.task_name}
              description={item.description}
              completed={item.completed}
              priority={item.priority}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="App">
      <div className="home">
        <div className="home-container">
          <Navbar />
          {hasTasks()}
          <div className="calendar-container"></div>
        </div>
      </div>
    </div>
  );
}

export default TaskHome;
