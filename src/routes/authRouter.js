import express from 'express';
import {postLogin, getMe, postForgotPassword } from '../controllers/authController.js';
import { authenticateToken } from '../../middlewares/authentiaction.js';

const authRouter = express.Router();

/**
 * @api {post} /api/auth/login Authorization User Login
 * @apiVersion 1.0.0
 * @apiName PostLogin
 * @apiGroup Auth
 * @apiPermission all
 *
 * @apiDescription Kirjautuminen käyttäjälle. Palauttaa JWT-tokenin.
 *
 * @apiParam {String} username Käyttäjänimi
 * @apiParam {String} password Salasana
 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "username": "test",
 *   "password": "test"
 * }
 *
 * @apiSuccess {String} token JWT-token
 * @apiSuccess {Object} user Käyttäjän tiedot
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Login successful",
 *   "token": "eyJhbGciOiJIUzI1Ni...",
 *   "user": {
 *     "user_id": 1,
 *     "username": "test",
 *     "email": "test@example.com",
 *     "user_level_id": 1
 *   }
 * }
 *
 * @apiError Unauthorized Invalid username or password
 */

authRouter.route('/login').post(postLogin);

/**
 * @api {post} /api/auth/forgotpassword Forgot Password
 * @apiVersion 1.0.0
 * @apiName PostForgotPassword
 * @apiGroup Auth
 * @apiPermission all
 * 
 * @apiDescription Lähetä salasanan palautuslinkki sähköpostiin.
 * 
 * @apiParam {String} email Sähköpostiosoite
 * 
 * @apiParamExample {json} Request-Example:
 * {
 *   "email": "test@example.com"
 * }
 * 
 * @apiSuccess {String} message Viesti onnistuneesta toiminnosta
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Password reset email sent"
 * }
 * 
 * @apiError Unauthorized Invalid email
 */

authRouter.route('/forgotpassword').post(postForgotPassword);

/**
 * @api {get} /api/auth/me User Info
 * @apiVersion 1.0.0
 * @apiName GetMe
 * @apiGroup Auth
 * @apiPermission token 
 * 
 * @apiDescription Palauttaa kirjautuneen käyttäjän tiedot.
 * 
 * @apiHeader {String} Authorization JWT-token
 * 
 * @apiHeaderExample {string} Authorization-Example:
 * Authorization: Bearer <token>
 * 
 * @apiSuccess {Object} user Käyttäjän tiedot
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * HTTP/1.1 200 OK
 * {
 * "user_id": 1,
 * "username": "test",
 * "email": "test@example.com",
 * "user_level_id": 1
 * }
 * 
 * @apiError Unauthorized Invalid token
 */

authRouter.route('/me').get(authenticateToken, getMe);

export default authRouter;