import { Navbar } from '../components/bar';
import '../css/home.css';
import { Card } from '../components/card';

function Home() {
  const cards = JSON.parse(localStorage.getItem('localCards')) || [];

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
            {cards.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                task={item.task}
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
