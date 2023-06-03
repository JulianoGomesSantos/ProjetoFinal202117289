// Este arquivo é um controller
// Ele é responsável por receber as requisições HTTP e enviar para a camada de serviços.

import create from '../../domain/services/tasks/create.js';
import list from '../../domain/services/tasks/list.js';
import get from '../../domain/services/tasks/get.js';
import update from '../../domain/services/tasks/update.js';
import remove from '../../domain/services/tasks/delete.js';

const createTask = async (req, res) => {
  const task = await create(req.body);

  res.send(task);
  return;
};

const listTask = async (req, res) => {
  const tasks = await list(req.params.user_id);
  res.send(tasks);
};

const getTask = async (req, res) => {
  const task = await get(req.params.id);
  res.send(task);
};

const updateTask = async (req, res) => {
  const task = await update(req.body);
  res.send(task);
};

const deleteTask = async (req, res) => {
  const task = await remove(req.params.id);
  res.send(task);
};

export { createTask, listTask, updateTask, getTask, deleteTask };
