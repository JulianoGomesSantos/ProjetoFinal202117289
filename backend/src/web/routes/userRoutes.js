import Router from 'express';
import { createUser, login, getUser } from '../controllers/userController.js';
const app = Router();

app.post('/user/create', createUser);

app.post('/user/login', login);

app.post('/user/get', getUser);

export default app;
