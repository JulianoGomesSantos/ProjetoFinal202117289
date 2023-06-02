// Serviço de criação de tarefas
// Este arquivo é responsável por fazer a comunicação com o banco de dados
// para as operações de CRUD (Create, Read, Update, Delete) das tarefas.

import { createTaskRepository } from '../../../database/repositories/task_db.js';
import Task from '../../entities/task.js';

const create = async (params) => {
  const { taskName, description, userId, priority } = params;

  const newTask = new Task({ taskName, description, userId, priority });

  const createdTask = await createTaskRepository(newTask);

  return createdTask;
};

export default create;
