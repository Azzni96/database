import promisePool from '../utils/database.js';

export const listLikesByMedia = async (media_id) => {
  const [rows] = await promisePool.query('SELECT * FROM Likes WHERE media_id = ?', [media_id]);
  return rows;
};

export const listLikesByUser = async (user_id) => {
  const [rows] = await promisePool.query('SELECT * FROM Likes WHERE user_id = ?', [user_id]);
  return rows;
};

export const addLike = async ({ media_id, user_id }) => {
  const sql = 'INSERT INTO Likes (media_id, user_id) VALUES (?, ?)';
  const [result] = await promisePool.query(sql, [media_id, user_id]);
  return { like_id: result.insertId };
};

export const findLikeById = async (like_id) => {
  const [rows] = await promisePool.query('SELECT * FROM Likes WHERE like_id = ?', [like_id]);
  return rows[0];
};

export const deleteLike = async (like_id) => {
  const sql = 'DELETE FROM Likes WHERE like_id = ?';
  await promisePool.query(sql, [like_id]);
};
