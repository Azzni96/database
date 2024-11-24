import promisePool from '../utils/database.js';

export const listAllUsers = async () => {
  const [rows] = await promisePool.query('SELECT * FROM Users');
  return rows;
};

export const findUserById = async (id) => {
  const [rows] = await promisePool.query('SELECT username, email, user_level_id FROM Users WHERE user_id = ?', [id]);
  return rows[0];
};

export const addUser = async (user) => {
  const { username, password, email, user_level_id } = user;
  const sql = `
    INSERT INTO Users (username, password, email, user_level_id)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await promisePool.query(sql, [username, password, email, user_level_id]);
  return { user_id: result.insertId };
};

export const updateUser = async (id, user) => {
  const { username, email } = user;
  const sql = `UPDATE Users SET username = ?, email = ? WHERE user_id = ?`;
  await promisePool.query(sql, [username, email, id]);
};

export const deleteUser = async (id) => {
  const sql = `DELETE FROM Users WHERE user_id = ?`;
  await promisePool.query(sql, [id]);
};

// How i login By username And password
export const selectUserByUsernameAndPassword = async (username, password) => {
  try {
    const sql = `SELECT * FROM Users WHERE username = ? AND password = ?`;
    const [rows] = await promisePool.query(sql, [username, password]);
    return rows[0];
  } catch (error) {
    console.error('Error in selectUserByUsernameAndPassword:', error.message);
    throw new Error('Failed to fetch user');
  }
};
