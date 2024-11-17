import {
    listLikesByMedia,
    listLikesByUser,
    addLike,
    deleteLike,
  } from '../models/likesModel.js';
  
  export const getLikesByMedia = async (req, res) => {
    const likes = await listLikesByMedia(req.params.media_id);
    res.json(likes);
  };
  
  export const getLikesByUser = async (req, res) => {
    const likes = await listLikesByUser(req.params.user_id);
    res.json(likes);
  };
  
  export const postLike = async (req, res) => {
    const { media_id, user_id } = req.body;
    const result = await addLike({ media_id, user_id });
    res.status(201).json(result);
  };
  
  export const deleteLikeById = async (req, res) => {
    await deleteLike(req.params.id);
    res.json({ message: 'Like deleted successfully' });
  };
  