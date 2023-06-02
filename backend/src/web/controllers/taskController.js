// Este arquivo é um controller
// Ele é responsável por receber as requisições HTTP e enviar para a camada de serviços.

// import { Task } from '../../models';
import create from '../../domain/services/tasks/create.js';
import list from '../../domain/services/tasks/list.js';

const createTask = async (req, res) => {
  const task = await create(req.body);

  res.send(task);
  return;
};

const listTask = async (req, res) => {
  const tasks = await list(req.params.user_id);
  res.send(tasks);
};

export { createTask, listTask };
