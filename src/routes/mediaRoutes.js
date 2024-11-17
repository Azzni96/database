import express from 'express';
import {
  getMedia,
  getMediaById,
  postMedia,
  putMedia,
  deleteMediaById,
} from '../controllers/mediaController.js';

const router = express.Router();

router.route('/')
  .get(getMedia)
  .post(postMedia);

router.route('/:id')
  .get(getMediaById)
  .put(putMedia)
  .delete(deleteMediaById);

export default router;
