import {
    listAllUsers,
    findUserById,
    addUser,
    updateUser,
    deleteUser,
  } from '../models/userModel.js';
  
  export const getUsers = async (req, res) => {
    const users = await listAllUsers();
    res.json(users);
  };
  
  export const getUserById = async (req, res) => {
    const user = await findUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };
  
  export const postUser = async (req, res) => {
    const { username, password, email, user_level_id } = req.body;
    const result = await addUser({ username, password, email, user_level_id });
    res.status(201).json(result);
  };
  
  export const putUser = async (req, res) => {
    const { username, email } = req.body;
    await updateUser(req.params.id, { username, email });
    res.json({ message: 'User updated successfully' });
  };
  
  export const deleteUserById = async (req, res) => {
    await deleteUser(req.params.id);
    res.json({ message: 'User deleted successfully' });
  };
  