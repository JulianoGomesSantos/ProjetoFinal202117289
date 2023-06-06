import {
  getUserByEmailRepository,
  getUserByIdRepository,
  getUserByUsernameRepository,
} from '../../../database/repositories/user_db.js';

const getService = async (params) => {
  if (params.id) {
    const user = await getUserByIdRepository(params);
    return user;
  }

  if (params.username) {
    const user = await getUserByUsernameRepository(params);
    return user;
  }

  if (params.email) {
    const user = await getUserByEmailRepository(params);
    return user;
  }

  return null;
};

export default getService;
