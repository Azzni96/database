import {
  listAllMedia,
  findMediaById,
  addMedia,
  updateMedia,
  deleteMedia,
} from '../models/mediaModel.js';
import { customError } from '../../middlewares/errorHandler.js';

export const getMedia = async (req, res, next) => {
  try {
    const media = await listAllMedia();
    res.json(media);
  } catch (error) {
    next(error); // Pass error to the error handler middleware
  }
};

export const getMediaById = async (req, res, next) => {
  try {
    const media = await findMediaById(req.params.id);
    if (media) {
      res.json(media);
    } else {
      const error = new Error('Media not found');
      error.status = 404;
      next(customError('item not found', error));
    }
  } catch (error) {
    next(customError(error.message, 503));
  }
};

export const postMedia = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.status = 400;
      error.details = errors.array();
      return next(error);
    }

    const { title, description } = req.body;
    const file = req.file;

    if (!file) {
      const error = new Error('File is required');
      error.status = 400;
      return next(error);
    }

    const result = await addMedia({
      user_id: req.user.user_id, // Ensure `req.user` is set by authentication middleware
      filename: file.filename,
      filesize: file.size,
      media_type: file.mimetype,
      title,
      description: description || '',
    });

    res.status(201).json({ message: 'Media uploaded successfully', media: result });
  } catch (error) {
    next(error);
  }
};

export const putMedia = async (req, res, next) => {
  try {
    const media = await findMediaById(req.params.id);

    if (!media) {
      const error = new Error('Media not found');
      error.status = 404;
      return next(error);
    }

    await updateMedia(req.params.id, req.body, req.user.user_id, req.user.user_level_id);
    res.json({ message: 'Media updated successfully' });
  } catch (error) {
    next(error);
  }
};

export const deleteMediaById = async (req, res, next) => {
  try {
    const media = await findMediaById(req.params.id);

    if (!media) {
      const error = new Error('Media not found');
      error.status = 404;
      return next(error);
    }

    await deleteMedia(req.params.id, req.user.user_id, req.user.user_level_id);
    res.json({ message: 'Media deleted successfully' });
  } catch (error) {
    next(error);
  }
};
