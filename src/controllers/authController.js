import jwt from 'jsonwebtoken';
import { selectUserByUsernameAndPassword } from '../models/userModel.js';
import 'dotenv/config';

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await selectUserByUsernameAndPassword(username, password);
    if (user) {
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
      res.json({ token, user });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMe = (req, res) => {
  res.json({ user: req.user });
};
