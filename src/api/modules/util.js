import jwt from 'jsonwebtoken';
import { devConfig } from '../../config/env/development';

export const getJWTToken = payload => {
  const token = jwt.sign(payload, devConfig.secret, {
    expiresIn: '1d',
  });
  return token;
};
