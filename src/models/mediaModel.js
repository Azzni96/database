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

export const updateMedia = async (id, media) => {
  const { title, description } = media;
  const sql = `UPDATE MediaItems SET title = ?, description = ? WHERE media_id = ?`;
  await promisePool.query(sql, [title, description, id]);
};

export const deleteMedia = async (id) => {
  const sql = `DELETE FROM MediaItems WHERE media_id = ?`;
  await promisePool.query(sql, [id]);
};
