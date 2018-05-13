import express from 'express';

export const authRouter = express.Router();
authRouter.route('/test').get((req, res) => {
  res.json({ msg: 'working' });
});
