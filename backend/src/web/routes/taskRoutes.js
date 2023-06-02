import Router from 'express';
import { createTask } from '../controllers/taskController.js';
const app = Router();

app.post('/task/create', createTask);

app.put('/task/update', function (req, res) {
  res.send('Hello World!');
});

app.get('/task/list', function (req, res) {
  res.send('Hello World!');
});

app.delete('/task/delete', function (req, res) {
  res.send('Hello World!');
});

app.get('/task/get', function (req, res) {
  res.send('Hello World!');
});

export default app;
