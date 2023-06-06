import create from '../../domain/services/user/create.js';
import getService from '../../domain/services/user/get.js';
import loginService from '../../domain/services/user/login.js';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
  const existingUser = await getService(req.body);

  if (existingUser) {
    return res.status(409).send('User Already Exist. Please Login');
  }

  const user = await create(req.body);

  const token = jwt.sign(
    { user_id: user.id, email: user.email },
    process.env.TOKEN_KEY,
    {
      expiresIn: '24h',
    }
  );

  user.token = token;

  return res.send(user);
};

const login = async (req, res) => {
  const user = await loginService(req.body);

  if (user == 'Not found') {
    return res.status(404).send({ message: 'User not found' });
  }

  if (user) {
    const token = jwt.sign(
      {
        data: {
          user_id: user.id,
          email: user.email,
          username: user.username,
          name: user.name,
        },
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: '24h',
      }
    );

    return res.send({ user: user, token: token });
  }

  return res.status(400).send({ message: 'Invalid login or password' });
};

export { createUser, login };
