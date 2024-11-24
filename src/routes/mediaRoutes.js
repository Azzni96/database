import express from 'express';
import { authenticateToken } from '../../middlewares/authentiaction.js';
import upload from '../../middlewares/upload.js';
import {
  getMedia,
  getMediaById,
  postMedia,
  putMedia,
  deleteMediaById,
} from '../controllers/mediaController.js';

const router = express.Router();

router
  .route('/')
  .get(getMedia) // Public access to list all media
  .post(authenticateToken, upload.single('file'), postMedia); // Protected route for adding media

router
  .route('/:id')
  .get(getMediaById) // Public access to view a single media
  .put(authenticateToken, putMedia) // Protected route to update media
  .delete(authenticateToken, deleteMediaById); // Protected route to delete media

export default router;
