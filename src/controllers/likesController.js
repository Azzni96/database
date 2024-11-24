import {
  listLikesByMedia,
  listLikesByUser,
  addLike,
  deleteLike,
  findLikeById,
} from '../models/likesModel.js';

export const getLikesByMedia = async (req, res) => {
  try {
    const likes = await listLikesByMedia(req.params.media_id);
    res.json(likes);
  } catch (error) {
    console.error('Error in getLikesByMedia:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getLikesByUser = async (req, res) => {
  try {
    const likes = await listLikesByUser(req.user.user_id); // Käyttäjän id tokenista
    res.json(likes);
  } catch (error) {
    console.error('Error in getLikesByUser:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const postLike = async (req, res) => {
  try {
    const { media_id } = req.body;

    // Lisää tykkäys tietokantaan käyttäen tokenista saatua user_id:tä
    const result = await addLike({ media_id, user_id: req.user.user_id });
    res.status(201).json({ message: 'Like added successfully', like_id: result.like_id });
  } catch (error) {
    console.error('Error in postLike:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteLikeById = async (req, res) => {
  try {
    const like = await findLikeById(req.params.id);

    // Tarkista, löytyykö tykkäys
    if (!like) {
      return res.status(404).json({ message: 'Like not found' });
    }

    // Varmista, että käyttäjä on tykkäyksen omistaja
    if (like.user_id !== req.user.user_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Poista tykkäys
    await deleteLike(req.params.id);
    res.json({ message: 'Like deleted successfully' });
  } catch (error) {
    console.error('Error in deleteLikeById:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
