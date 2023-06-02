// import { Task } from '../../models';
import create from '../../domain/services/tasks/create.js';

const createTask = (req, res) => {
  const task = create(req.body);

  res.send(task);
  return;
};

export { createTask };
