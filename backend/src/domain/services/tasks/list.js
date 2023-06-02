// Este arquivo é responsável por conectar a camada de serviços com a camada de repositórios.
// Ele lista as tarefas de um usuário.

import { listTaskRepository } from '../../../database/repositories/task_db.js';
import Task from '../../entities/task.js';

const list = async (userId) => {
  const tasks = await listTaskRepository(userId);

  return tasks;
};

export default list;
