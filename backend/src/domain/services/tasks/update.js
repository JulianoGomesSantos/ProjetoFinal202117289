import { updateTaskRepository } from '../../../database/repositories/task_db.js';

const update = (params) => {
  console.log(params);
  const updatedTask = updateTaskRepository(params);

  return updatedTask;
};

export default update;
