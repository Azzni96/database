import express from 'express';
import {
  getUsers,
  getUserById,
  postUser,
  putUser,
  deleteUserById,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/')
  .get(getUsers)
  .post(postUser);

router.route('/:id')
  .get(getUserById)
  .put(putUser)
  .delete(deleteUserById);

export default router;
