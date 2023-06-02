import { listTaskRepository } from '../../../database/repositories/task_db.js';
import Task from '../../entities/task.js';

const list = (userId) => {
  const tasks = listTaskRepository(userId);

  return tasks;
};

export default list;
