import {
    listRatingsByMedia,
    addRating,
    deleteRating,
  } from '../models/ratingsModel.js';
  
  export const getRatingsByMedia = async (req, res) => {
    const ratings = await listRatingsByMedia(req.params.media_id);
    res.json(ratings);
  };
  
  export const postRating = async (req, res) => {
    const { media_id, user_id, rating_value } = req.body;
    const result = await addRating({ media_id, user_id, rating_value });
    res.status(201).json(result);
  };
  
  export const deleteRatingById = async (req, res) => {
    await deleteRating(req.params.id);
    res.json({ message: 'Rating deleted successfully' });
  };
  