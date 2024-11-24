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
    try {
      console.log('req.user:', req.user); // Tarkista mitä `req.user` sisältää
      const { title, description } = req.body;
      const file = req.file;
  
      if (!file) {
        return res.status(400).json({ message: 'File is required' });
      }
  
      const result = await addMedia({
        user_id: req.user.user_id, // Varmista, että tämä on määritelty
        filename: file.filename,
        filesize: file.size,
        media_type: file.mimetype,
        title,
        description: description || '',
      });
  
      res.status(201).json({ message: 'Media uploaded successfully', media: result });
    } catch (error) {
      console.error('Error in postMedia:', error.message);
      res.status(500).json({ message: 'Failed to upload media' });
    }
  };
  
  
  export const deleteMediaById = async (req, res) => {
    try {
      const media = await findMediaById(req.params.id);
  
      if (!media) {
        return res.status(404).json({ message: 'Media not found' });
      }
  
      // Poista media käyttäjän roolin perusteella
      await deleteMedia(req.params.id, req.user.user_id, req.user.user_level_id);
      res.json({ message: 'Media deleted successfully' });
    } catch (error) {
      console.error('Error in deleteMediaById:', error.message);
      res.status(500).json({ message: error.message });
    }
  };
  
  // Päivitä media
  export const putMedia = async (req, res) => {
    try {
      const media = await findMediaById(req.params.id);
  
      if (!media) {
        return res.status(404).json({ message: 'Media not found' });
      }
  
      // Päivitä media käyttäjän roolin perusteella
      await updateMedia(req.params.id, req.body, req.user.user_id, req.user.user_level_id);
      res.json({ message: 'Media updated successfully' });
    } catch (error) {
      console.error('Error in putMedia:', error.message);
      res.status(500).json({ message: error.message });
    }
  };