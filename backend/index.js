import express from 'express';
import userRoutes from './src/web/routes/userRoutes.js';
import taskRoutes from './src/web/routes/taskRoutes.js';
import cors from 'cors';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  res.header('Access-Control-Allow-Headers', 'Content-Type');

  app.use(cors());
  next();
});

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(8081, function () {
  console.log('Server working');
});

export default app;
