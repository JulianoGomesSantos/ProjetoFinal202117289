import jwt from 'jsonwebtoken';

export const isValidToken = (token) => {
  var decodedToken = jwt.decode(token, { complete: true });
  var dateNow = new Date();

  if (decodedToken.exp < dateNow.getTime()) {
    return false;
  }

  return true;
};
