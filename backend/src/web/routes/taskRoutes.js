// Este é o arquivo de rotas

import Router from 'express';
import { createTask, listTask } from '../controllers/taskController.js';
const app = Router();

app.post('/task/create', createTask);

app.put('/task/update', function (req, res) {
  res.send('Hello World!');
});

app.get('/task/list/:user_id', listTask);

app.delete('/task/delete', function (req, res) {
  res.send('Hello World!');
});

app.get('/task/get', function (req, res) {
  res.send('Hello World!');
});

export default app;
