// Servico responsavel por remover uma tarefa

import { deleteTaskRepository } from '../../../database/repositories/task_db.js';

const remove = async (id) => {
  await deleteTaskRepository(id);

  return;
};

export default remove;
