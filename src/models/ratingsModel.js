import promisePool from '../utils/database.js';

export const listRatingsByMedia = async (media_id) => {
  const [rows] = await promisePool.query('SELECT * FROM Ratings WHERE media_id = ?', [media_id]);
  return rows;
};

export const addRating = async (rating) => {
  const { media_id, user_id, rating_value } = rating;
  const sql = `
    INSERT INTO Ratings (media_id, user_id, rating_value)
    VALUES (?, ?, ?)
  `;
  const [result] = await promisePool.query(sql, [media_id, user_id, rating_value]);
  return { rating_id: result.insertId };
};

export const deleteRating = async (id) => {
  const sql = `DELETE FROM Ratings WHERE rating_id = ?`;
  await promisePool.query(sql, [id]);
};
