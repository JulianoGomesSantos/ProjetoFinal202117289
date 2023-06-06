import Router from 'express';
import { createUser, login } from '../controllers/userController.js';
const app = Router();

app.post('/user/create', createUser);

app.post('/user/login', login);

export default app;
