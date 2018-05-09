import { BAD_REQUEST, INTERNAL_SERVER_ERROR, UNAUTHORIZED } from 'http-status-codes';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userService from './user.service';
import User from './user.model';
import { devConfig } from '../../../config/env/development';

export default {
  async signup(req, res) {
    try {
      const { error, value } = userService.validateSchema(req.body);
      if (error && error.details) {
        return res.status(BAD_REQUEST).json(error);
      }
      const user = await User.create(value);
      return res.json({ success: true, message: 'User create successfully' });
    } catch (err) {
      console.error(err);
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async login(req, res) {
    try {
      const { error, value } = userService.validateSchema(req.body);
      if (error && error.details) {
        return res.status(BAD_REQUEST).json(error);
      }
      const user = await User.findOne({ email: value.email });
      if (!user) {
        return res.status(BAD_REQUEST).json({ err: 'invalid email or password' });
      }
      const matched = bcryptjs.compare(value.password, user.password);
      if (!matched) {
        return res.status(UNAUTHORIZED).json({ err: 'invalid credentials' });
      }
      const token = jwt.sign({ id: user._id }, devConfig.secret, {
        expiresIn: '1d',
      });
      return res.json({ success: true, token });
    } catch (err) {
      console.error(err);
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
