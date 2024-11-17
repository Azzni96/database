import promisePool from '../utils/database.js';

export const listCommentsByMedia = async (media_id) => {
  const [rows] = await promisePool.query('SELECT * FROM Comments WHERE media_id = ?', [media_id]);
  return rows;
};

export const addComment = async (comment) => {
  const { media_id, user_id, comment_text } = comment;
  const sql = `
    INSERT INTO Comments (media_id, user_id, comment_text)
    VALUES (?, ?, ?)
  `;
  const [result] = await promisePool.query(sql, [media_id, user_id, comment_text]);
  return { comment_id: result.insertId };
};

export const deleteComment = async (id) => {
  const sql = `DELETE FROM Comments WHERE comment_id = ?`;
  await promisePool.query(sql, [id]);
};
