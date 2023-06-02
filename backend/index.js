import express from 'express';
import userRoutes from './src/web/routes/userRoutes.js';
import taskRoutes from './src/web/routes/taskRoutes.js';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(8081, function () {
  console.log('Server working');
});

export default app;
