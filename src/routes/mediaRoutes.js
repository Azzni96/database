import express from 'express';
import multer from 'multer';
import {
  getMedia,
  getMediaById,
  postMedia,
  putMedia,
  deleteMediaById,
} from '../controllers/mediaController.js';
import { authenticateToken } from '../../middlewares/authentiaction.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });
router.route('/')
  .get(getMedia)
  .post(authenticateToken, upload.single('file'), postMedia);

router.route('/:id')
  .get(getMediaById)
  .put(authenticateToken, putMedia)
  .delete(authenticateToken, deleteMediaById);

export default router;
