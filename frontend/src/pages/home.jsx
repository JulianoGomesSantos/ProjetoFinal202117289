import { Navbar } from '../components/bar';
import '../css/home.css';
import { Card } from '../components/card';
import api from '../config/api';
import { useEffect, useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

function Home() {
  const getCurrentCompletedState = () => {
    if (localStorage.getItem('completedState')) {
      return true;
    }

    return false;
  };

  const [cardList, setCardList] = useState([]);
  const [completed, setCompleted] = useState(getCurrentCompletedState());

  useEffect(() => {
    api
      .get('/task/list', { params: { userId: 1, completed: completed } })
      .then((res) => {
        setCardList(res.data);
      });
  }, [completed]);

  const saveCompletedState = (params) => {
    localStorage.setItem('completedState', params);
    setCompleted(params);
    return;
  };

  return (
    <div className="App">
      <div className="home">
        <div className="home-container">
          <Navbar />
          <div className="card-container">
            <span>
              <div>
                {completed ? (
                  <MdCheckBox
                    size={'32px'}
                    color="#672bde"
                    onClick={() => saveCompletedState(false)}
                  />
                ) : (
                  <MdCheckBoxOutlineBlank
                    size={'32px'}
                    color="#672bde"
                    onClick={() => saveCompletedState(true)}
                  />
                )}
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
          <div className="calendar-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
