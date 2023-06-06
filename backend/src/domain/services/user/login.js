import bcrypt from 'bcrypt';
import { getUserRepository } from '../../../database/repositories/user_db.js';

const loginService = async (params) => {
  const user = await getUserRepository(params);

  if (!user) {
    return 'Not found';
  }

  const isValid = bcrypt.compare(params.password, user.password);

  if (!isValid) {
    return null;
  }

  return user;
};

export default loginService;
