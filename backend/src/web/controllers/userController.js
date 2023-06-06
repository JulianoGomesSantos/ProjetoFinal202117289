// Este arquivo é um controller
// Ele é responsável por receber as requisições HTTP e enviar para a camada de serviços.

import create from '../../domain/services/user/create.js';
import loginService from '../../domain/services/user/login.js';
// import get from '../../domain/services/tasks/get.js';
// import update from '../../domain/services/tasks/update.js';
// import remove from '../../domain/services/tasks/delete.js';

const createUser = async (req, res) => {
  const user = await create(req.body);

  return res.send(user);
};

const login = async (req, res) => {
  const logged = await loginService(req.body);

  if (logged == 'Not found') {
    return res.status(404).send({ message: 'User not found' });
  }

  if (logged) {
    return res.send(logged);
  }

  return res.status(400).send({ message: 'Invalid login or password' });
};

// const listTask = async (req, res) => {
//   const tasks = await list(req.query);
//   res.send(tasks);
// };

// const getTask = async (req, res) => {
//   const task = await get(req.params.id);
//   res.send(task);
// };

// const updateTask = async (req, res) => {
//   const task = await update(req.body);
//   res.send(task);
// };

// const deleteTask = async (req, res) => {
//   const task = await remove(req.params.id);
//   res.send(task);
// };

export { createUser, login };
