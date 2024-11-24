import promisePool from '../utils/database.js';

export const listAllMedia = async () => {
  const [rows] = await promisePool.query('SELECT * FROM MediaItems');
  return rows;
};

export const findMediaById = async (id) => {
  const [rows] = await promisePool.query('SELECT * FROM MediaItems WHERE media_id = ?', [id]);
  return rows[0];
};

export const addMedia = async (media) => {
  const { user_id, filename, filesize, media_type, title, description } = media;
  const sql = `
    INSERT INTO MediaItems (user_id, filename, filesize, media_type, title, description)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await promisePool.query(sql, [user_id, filename, filesize, media_type, title, description]);
  return { media_id: result.insertId };
};

export const updateMedia = async (id, data, user_id, user_level_id) => {
  const { title, description } = data;
  if (user_level_id === 1) {
    const sql = `UPDATE MediaItems SET title = ?, description = ? WHERE media_id = ?`;
    await promisePool.query(sql, [title, description, id]);
  } else {
    const sql = `UPDATE MediaItems SET title = ?, description = ? WHERE media_id = ? AND user_id = ?`;
    const [result] = await promisePool.query(sql, [title, description, id, user_id]);
    if (result.affectedRows === 0) {
      throw new Error('You do not have permission to update this media');
    }
  }
}


export const deleteMedia = async (id, user_id, user_level_id) => {
  if (user_level_id === 1) {
    // Admin: voi poistaa minkä tahansa media-itemin
    const sql = `DELETE FROM MediaItems WHERE media_id = ?`;
    await promisePool.query(sql, [id]);
  } else {
    // Tavallinen käyttäjä: voi poistaa vain omat media-itemit
    const sql = `DELETE FROM MediaItems WHERE media_id = ? AND user_id = ?`;
    const [result] = await promisePool.query(sql, [id, user_id]);
    if (result.affectedRows === 0) {
      throw new Error('Unauthorized or media not found');
    }
  }
};