// Essa classe representa a entidade Task, que é a entidade principal do nosso domínio.
// Ela é responsável por representar a estrutura de uma tarefa, e é utilizada em diversos
// lugares do nosso código, como por exemplo, na camada de serviços, na camada de repositórios,
// e na camada de rotas.

export default class Task {
  constructor({ taskName, description, priority, userId }) {
    this.taskName = taskName;
    this.description = description;
    this.priority = priority;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.userId = userId;
  }
}
