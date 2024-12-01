import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import {
  listAllUsers,
  findUserById,
  addUser,
  updateUser,
  deleteUser,
} from '../models/userModel.js';

// Get all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await listAllUsers();
    res.json(users);
  } catch (error) {
    next(error); // Pass error to error handler
  }
};

// Get user by ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await findUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      const error = new Error('User not found');
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

// Add a new user
export const postUser = async (req, res, next) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed');
    error.status = 400;
    error.details = errors.array();
    return next(error);
  }

  const { username, password, email, user_level_id } = req.body;

  try {
    const result = await addUser({ username, password, email, user_level_id });
    res.status(201).json({ message: 'User added successfully', user_id: result });
  } catch (error) {
    next(error);
  }
};

// Update user
export const putUser = async (req, res, next) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed');
    error.status = 400;
    error.details = errors.array();
    return next(error);
  }

  const { username, email } = req.body;

  try {
    const result = await updateUser(req.params.id, { username, email });
    if (result.affectedRows === 0) {
      const error = new Error('User not found or no changes made');
      error.status = 404;
      return next(error);
    }
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    next(error);
  }
};

// Delete user
export const deleteUserById = async (req, res, next) => {
  try {
    const result = await deleteUser(req.params.id);
    if (result.affectedRows === 0) {
      const error = new Error('User not found');
      error.status = 404;
      return next(error);
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
