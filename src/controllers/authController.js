import jwt from 'jsonwebtoken';
import { selectUserByUsernameAndPassword } from '../models/userModel.js';
import 'dotenv/config';
import { customError } from '../../middlewares/errorHandler.js';


export const postLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await selectUserByUsernameAndPassword(username, password);
    if (user) {
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
      res.json({...user, token});
    } else {
      return next(customError('Invalid username or password', 401));
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMe = (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    return next(customError(error.message, 503));
  }
};
