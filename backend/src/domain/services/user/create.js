import { createUserRepository } from '../../../database/repositories/user_db.js';
import User from '../../entities/user.js';
import bcrypt from 'bcrypt';

const create = async (params) => {
  const { name, profile_image, password, username, email } = params;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    username,
    profile_image,
    password: hashPassword,
    email,
  });

  const createdUser = await createUserRepository(newUser);

  return createdUser;
};

export default create;
