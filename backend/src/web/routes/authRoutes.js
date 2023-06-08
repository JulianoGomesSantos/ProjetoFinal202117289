import Router from 'express';

import { validateToken } from '../controllers/authController.js';
const app = Router();

app.post('/auth/validate-token', validateToken);

export default app;
