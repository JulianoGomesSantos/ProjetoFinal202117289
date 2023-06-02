import { createTaskRepository } from '../../../database/repositories/task_db.js';
import Task from '../../entities/task.js';

const create = (params) => {
  const { taskName, description, userId, priority } = params;

  const newTask = new Task({ taskName, description, userId, priority });

  const createdTask = createTaskRepository(newTask);

  return createdTask;
};

export default create;
