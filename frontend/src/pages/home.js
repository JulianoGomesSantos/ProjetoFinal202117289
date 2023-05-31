import { Navbar } from "../components/bar";
import "../css/home.css";
import { Card } from "../components/card";

function Home() {
  const banana = [
    {
      id: 1,
      task: "Sair do Bronze",
      complete: true,
      description: "Segunda",
    },
    {
      id: 2,
      task: "Pagar o teclado",
      complete: false,
      description: "Terça",
    },
    {
      id: 3,
      task: "Parar de jogar lol",
      complete: false,
      description: "Quarta",
    },
    {
      id: 4,
      task: "Ter o TCC validado pela professora",
      complete: false,
      description: "Quinta",
    },
    {
      id: 5,
      task: "Ir buscar meu diploma",
      complete: false,
      description: "Sexta",
    },
    {
      id: 6,
      task: "Não fazer listas de tarefas",
      complete: false,
      description: "Sabado",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="home">
        <div className="home_container">
          <p>Task List</p>
          <div className="card_container">
            {banana.map((item) => (
              <Card
                key={item.id}
                task={item.task}
                description={item.description}
                complete={item.complete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
