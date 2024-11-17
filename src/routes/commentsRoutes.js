import express from 'express';
import {
  getCommentsByMedia,
  postComment,
  deleteCommentById,
} from '../controllers/commentsController.js';

const router = express.Router();

router.route('/media/:media_id').get(getCommentsByMedia);
router.route('/').post(postComment);
router.route('/:id').delete(deleteCommentById);

export default router;
