import {
    listAllMedia,
    findMediaById,
    addMedia,
    updateMedia,
    deleteMedia,
  } from '../models/mediaModel.js';
  
  export const getMedia = async (req, res) => {
    const media = await listAllMedia();
    res.json(media);
  };
  
  export const getMediaById = async (req, res) => {
    const media = await findMediaById(req.params.id);
    if (media) {
      res.json(media);
    } else {
      res.status(404).json({ error: 'Media not found' });
    }
  };
  
  export const postMedia = async (req, res) => {
    const { user_id, filename, filesize, media_type, title, description } = req.body;
    const result = await addMedia({ user_id, filename, filesize, media_type, title, description });
    res.status(201).json(result);
  };
  
  export const putMedia = async (req, res) => {
    const { title, description } = req.body;
    await updateMedia(req.params.id, { title, description });
    res.json({ message: 'Media updated successfully' });
  };
  
  export const deleteMediaById = async (req, res) => {
    await deleteMedia(req.params.id);
    res.json({ message: 'Media deleted successfully' });
  };
  