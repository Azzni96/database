import express from 'express';
import { body } from 'express-validator';
import {
  getUsers,
  getUserById,
  postUser,
  putUser,
  deleteUserById,
} from '../controllers/userController.js';

const router = express.Router();

const userValidationRules = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage('Username must be between 3 and 20 characters')
    .isAlphanumeric()
    .withMessage('Username must be alphanumeric'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email is not valid'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];
router.route('/')
  .get(getUsers)
  .post(userValidationRules, postUser);

router.route('/:id')
  .get(getUserById)
  .put(
    [
      body('username')
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Username must be between 3 and 20 characters')
        .isAlphanumeric()
        .withMessage('Username must be alphanumeric'),
      body('email')
        .optional()
        .trim()
        .isEmail()
        .withMessage('Email is not valid'),
    ],
    putUser
  )
  .delete(deleteUserById);

export default router;
