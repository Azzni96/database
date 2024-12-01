import express from 'express';
import {postLogin, getMe, postForgotPassword } from '../controllers/authController.js';
import { authenticateToken } from '../../middlewares/authentiaction.js';

const authRouter = express.Router();

authRouter.route('/login').post(postLogin);
authRouter.route('/forgotpassword').post(postForgotPassword);
authRouter.route('/me').get(authenticateToken, getMe);

export default authRouter;