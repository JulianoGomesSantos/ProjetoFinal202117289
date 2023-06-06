import Router from 'express';

import auth from '../middlewares/auth.js';

import {
  createTask,
  listTask,
  updateTask,
  getTask,
  deleteTask,
} from '../controllers/taskController.js';
const app = Router();

app.post('/task/create', auth, createTask);

app.put('/task/update', auth, updateTask);

app.get('/task/list', auth, listTask);

app.delete('/task/delete/:id', auth, deleteTask);

app.get('/task/get/:id', auth, getTask);

export default app;
