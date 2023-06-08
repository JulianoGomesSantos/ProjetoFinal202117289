import { isValidToken } from '../../domain/services/auth/isValidToken.js';

const validateToken = async (req, res) => {
  const task = await isValidToken(req.body.token);

  res.send(task);
  return;
};

export { validateToken };
