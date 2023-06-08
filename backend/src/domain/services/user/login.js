import bcrypt from 'bcrypt';
import getService from './get.js';

const loginService = async (params) => {
  const user = await getService(params);

  if (!user) {
    return 'Not found';
  }

  const isValid = await bcrypt.compare(params.password, user.password);

  if (!isValid) {
    return null;
  }

  const { id, email, name, username, profile_image } = user;

  return { id, email, name, username, profile_image };
};

export default loginService;
