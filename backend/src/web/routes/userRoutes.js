import Router from 'express';
import {
  createUser,
  login,
  getUser,
  userHasTasks,
} from '../controllers/userController.js';
const app = Router();

app.post('/user/create', createUser);

app.get('/user/hasTasks/:id', userHasTasks);

app.post('/user/login', login);

app.post('/user/get', getUser);

export default app;
