import { Navbar } from '../components/bar';
import '../css/home.css';
import { Card } from '../components/card';
import api from '../config/api';
import { useEffect, useState } from 'react';

function Home() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    api.get('/task/list/1').then((res) => {
      setCardList(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="home">
        <div className="home-container">
          <Navbar />
          <div className="card-container">
            <span>
              <p>Task List</p>
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
