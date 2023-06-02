import Router from 'express';
const app = Router();

app.get('/users', function (req, res) {
  res.send('Hello World!');
});

export default app;
