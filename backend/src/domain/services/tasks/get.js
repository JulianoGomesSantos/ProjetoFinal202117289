// Servico responsavel por listar uma tarefa

import { getTaskRepository } from '../../../database/repositories/task_db.js';

const get = async (id) => {
  const tasks = await getTaskRepository(id);

  return tasks;
};

export default get;
