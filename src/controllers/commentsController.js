import {
    listCommentsByMedia,
    addComment,
    deleteComment,
  } from '../models/commentsModel.js';
  
  export const getCommentsByMedia = async (req, res) => {
    const comments = await listCommentsByMedia(req.params.media_id);
    res.json(comments);
  };
  
  export const postComment = async (req, res) => {
    const { media_id, user_id, comment_text } = req.body;
    const result = await addComment({ media_id, user_id, comment_text });
    res.status(201).json(result);
  };
  
  export const deleteCommentById = async (req, res) => {
    await deleteComment(req.params.id);
    res.json({ message: 'Comment deleted successfully' });
  };
  