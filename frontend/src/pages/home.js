import { Navbar } from "../components/bar";
import "../css/home.css";
import { Card } from "../components/card";

function Home() {
  const cards = JSON.parse(localStorage.getItem("localCards"));

  return (
    <div className="App">
      <Navbar />
      <div className="home">
        <div className="home_container">
          <p>Task List</p>
          <div className="card_container">
            {cards.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                task={item.task}
                description={item.description}
                completed={item.completed}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
