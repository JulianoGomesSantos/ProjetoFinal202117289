import { listTaskRepository } from '../../../database/repositories/task_db.js';

const list = async (params) => {
  const tasks = await listTaskRepository({
    userId: params.userId,
    completed: params.completed,
  });

  return tasks;
};

export default list;
