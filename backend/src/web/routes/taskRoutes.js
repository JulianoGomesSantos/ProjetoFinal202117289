// Este é o arquivo de rotas

import Router from 'express';
import {
  createTask,
  listTask,
  updateTask,
  getTask,
  deleteTask,
} from '../controllers/taskController.js';
const app = Router();

app.post('/task/create', createTask);

app.put('/task/update', updateTask);

app.get('/task/list', listTask);

app.delete('/task/delete/:id', deleteTask);

app.get('/task/get/:id', getTask);

export default app;
