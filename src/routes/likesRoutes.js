import express from 'express';
import {
  getLikesByMedia,
  getLikesByUser,
  postLike,
  deleteLikeById,
} from '../controllers/likesController.js';
import { authenticateToken } from '../../middlewares/authentiaction.js';

const router = express.Router();

/**
 * @api {get} /api/likes/media/:media_id Get Likes for Media
 * @apiVersion 1.0.0
 * @apiName GetLikesByMedia
 * @apiGroup Likes
 * @apiPermission token
 *
 * @apiDescription Hakee kaikki tykkäykset tietylle medialle.
 *
 * @apiHeader {String} Authorization Bearer token käyttäjän todennukseen.
 * @apiHeaderExample {string} Authorization-Example:
 * Authorization: Bearer <token>
 *
 * @apiParam {Number} media_id Median ID.
 *
 * @apiSuccess {Object[]} likes Lista median tykkäyksistä.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "like_id": 1,
 *     "media_id": 123,
 *     "user_id": 456,
 *     "created_at": "2024-12-03T12:00:00Z"
 *   }
 * ]
 *
 * @apiError Unauthorized Käyttäjä ei ole todennettu.
 * @apiError NotFound Median tykkäyksiä ei löytynyt.
 */
router.get('/media/:media_id', authenticateToken, getLikesByMedia);

/**
 * @api {get} /api/likes/user Get User's Likes
 * @apiVersion 1.0.0
 * @apiName GetLikesByUser
 * @apiGroup Likes
 * @apiPermission token
 *
 * @apiDescription Hakee kaikki käyttäjän tykkäykset.
 *
 * @apiHeader {String} Authorization Bearer token käyttäjän todennukseen.
 * @apiHeaderExample {string} Authorization-Example:
 * Authorization: Bearer <token>
 *
 * @apiSuccess {Object[]} likes Lista käyttäjän tykkäyksistä.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "like_id": 1,
 *     "media_id": 123,
 *     "user_id": 456,
 *     "created_at": "2024-12-03T12:00:00Z"
 *   }
 * ]
 *
 * @apiError Unauthorized Käyttäjä ei ole todennettu.
 * @apiError NotFound Käyttäjän tykkäyksiä ei löytynyt.
 */
router.get('/user', authenticateToken, getLikesByUser);

/**
 * @api {post} /api/likes Add Like
 * @apiVersion 1.0.0
 * @apiName PostLike
 * @apiGroup Likes
 * @apiPermission token
 *
 * @apiDescription Lisää uusi tykkäys.
 *
 * @apiHeader {String} Authorization Bearer token käyttäjän todennukseen.
 * @apiHeaderExample {string} Authorization-Example:
 * Authorization: Bearer <token>
 *
 * @apiParam {Number} media_id Median ID, jolle tykkäys lisätään.
 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "media_id": 123
 * }
 *
 * @apiSuccess {Object} like Lisätty tykkäys.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 Created
 * {
 *   "like_id": 1,
 *   "media_id": 123,
 *   "user_id": 456,
 *   "created_at": "2024-12-03T12:00:00Z"
 * }
 *
 * @apiError Unauthorized Käyttäjä ei ole todennettu.
 * @apiError BadRequest Puuttuva tai virheellinen media_id.
 */
router.post('/', authenticateToken, postLike);

/**
 * @api {delete} /api/likes/:id Delete Like
 * @apiVersion 1.0.0
 * @apiName DeleteLike
 * @apiGroup Likes
 * @apiPermission token
 *
 * @apiDescription Poistaa tykkäyksen sen ID:n perusteella.
 *
 * @apiHeader {String} Authorization Bearer token käyttäjän todennukseen.
 * @apiHeaderExample {string} Authorization-Example:
 * Authorization: Bearer <token>
 *
 * @apiParam {Number} id Poistettavan tykkäyksen ID.
 *
 * @apiSuccess {String} message Ilmoitus onnistuneesta poistosta.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Like deleted successfully."
 * }
 *
 * @apiError Unauthorized Käyttäjä ei ole todennettu.
 * @apiError NotFound Tykkäystä ei löytynyt annetulla ID:llä.
 */
router.delete('/:id', authenticateToken, deleteLikeById);

export default router;
