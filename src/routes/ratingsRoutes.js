import express from 'express';
import {
  getRatingsByMedia,
  postRating,
  deleteRatingById,
} from '../controllers/ratingsController.js';

const router = express.Router();

router.route('/media/:media_id').get(getRatingsByMedia);
router.route('/').post(postRating);
router.route('/:id').delete(deleteRatingById);

export default router;
