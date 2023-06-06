import Router from 'express';
import { createUser, login } from '../controllers/userController.js';
const app = Router();

app.post('/user/create', createUser);

app.post('/user/login', login);

// app.get('/user/get', getUser);

// app.get('/user/login', login);

// app.get('/task/list', listTask);

// app.delete('/task/delete/:id', deleteTask);

// app.get('/task/get/:id', getTask);
export default app;
