import express from 'express';
import {
  getLikesByMedia,
  getLikesByUser,
  postLike,
  deleteLikeById,
} from '../controllers/likesController.js';

const router = express.Router();

router.route('/media/:media_id').get(getLikesByMedia);
router.route('/user/:user_id').get(getLikesByUser);
router.route('/').post(postLike);
router.route('/:id').delete(deleteLikeById);

export default router;
