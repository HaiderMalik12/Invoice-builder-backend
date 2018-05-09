import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import userService from './user.service';
import User from './user.model';

export default {
  async signup(req, res) {
    try {
      // validate the request
      const { error, value } = userService.validateSchema(req.body);
      if (error && error.details) {
        return res.status(BAD_REQUEST).json(error);
      }
      // enrypt the user password

      // create new user
      const user = await User.create(value);
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
