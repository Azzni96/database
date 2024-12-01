import promisePool from '../utils/database.js';
import bcrypt from 'bcryptjs';
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
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const sql = `
    INSERT INTO Users (username, password, email, user_level_id)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await promisePool.query(sql, [username, hashedPassword, email, user_level_id]);
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

export const selectUserByUsername = async (username) => {
  try {
    const sql = `SELECT * FROM Users WHERE username = ?`;
    const [rows] = await promisePool.query(sql, [username]);
    return rows[0];
  } catch (error) {
    console.error('Error in selectUserByUsername:', error.message);
    throw new Error('Failed to fetch user');
  }
};

export const saveResetToken = async (email, resetToken, expiry) => {
  try {
    const sql = `
      UPDATE Users SET password_reset_token = ?, token_expiry = ? WHERE email = ?
    `;
    await promisePool.query(sql, [resetToken, expiry, email]);
  } catch (error) {
    console.error('Error saving reset token:', error.message);
    throw new Error('Failed to save reset token');
  }
};
export const selectUserByEmail = async (email) => {
  try {
    const sql = 'SELECT * FROM Users WHERE email = ?';
    const [rows] = await promisePool.query(sql, [email]);
    return rows[0]; // Palauttaa ensimmäisen käyttäjän tai `undefined`, jos käyttäjää ei löydy
  } catch (error) {
    console.error('Error in selectUserByEmail:', error.message);
    throw new Error('Failed to fetch user by email');
  }
};