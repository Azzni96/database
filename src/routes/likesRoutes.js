import express from 'express';
import {
  getLikesByMedia,
  getLikesByUser,
  postLike,
  deleteLikeById,
} from '../controllers/likesController.js';
import { authenticateToken } from '../../middlewares/authentiaction.js';

const router = express.Router();

router.get('/media/:media_id', authenticateToken, getLikesByMedia);
router.get('/user', authenticateToken, getLikesByUser); // Ei enää tarvitse user_id:tä bodyssä
router.post('/', authenticateToken, postLike);
router.delete('/:id', authenticateToken, deleteLikeById);

export default router;
