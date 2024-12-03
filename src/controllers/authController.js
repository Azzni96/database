import jwt from 'jsonwebtoken';
import { selectUserByUsername, selectUserByUsernameAndPassword } from '../models/userModel.js';
import 'dotenv/config';
import { customError } from '../../middlewares/errorHandler.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { saveResetToken, selectUserByEmail } from '../models/userModel.js';


/**
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {function} next Express next function
 *
 */
export const postLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try{
    const user = await selectUserByUsername(username);
    if (!user) {
      return next(customError('User not found', 404));
    }
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
      return next(customError('Invalid password', 401));
    }
    const token = jwt.sign({ 
      user_id: user.user_id, 
      username: user.username, 
      user_level_id: user.user_level_id 
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    const { password: _, ...userWithoutPassword } = user;
    res.json({ token, user: userWithoutPassword });
  } catch (error) {
    return next(customError(error.message, 503));
  }
};
export const postForgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await selectUserByEmail(email);
    if (!user) {
      return next(customError('User not found', 404));
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 3600000); // Tokenin voimassaoloaika: 1 tunti

    await saveResetToken(email, resetToken, expiry);

    console.log(`Generated reset token for ${email}: ${resetToken}`);

    res.json({ message: 'Password reset email sent' });
  } catch (error) {
    next(customError(error.message, 503));
  }
};
export const getMe = (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    return next(customError(error.message, 503));
  }
};
