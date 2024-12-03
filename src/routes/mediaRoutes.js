import express from 'express';
import { authenticateToken } from '../../middlewares/authentiaction.js';
import upload from '../../middlewares/upload.js';
import {
  getMedia,
  getMediaById,
  postMedia,
  putMedia,
  deleteMediaById,
} from '../controllers/mediaController.js';

const router = express.Router();

/**
 * @api {get} /api/media Get All Media
 * @apiVersion 1.0.0
 * @apiName GetMedia
 * @apiGroup Media
 * @apiPermission public
 *
 * @apiDescription Hakee kaikki median tiedot.
 *
 * @apiSuccess {Object[]} media List of all media.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "media_id": 1,
 *     "filename": "example.jpg",
 *     "title": "Example Media",
 *     "description": "An example media description.",
 *     "user_id": 1,
 *     "media_type": "image/jpeg",
 *     "created_at": "2024-12-03T10:00:00Z"
 *   }
 * ]
 */
router.route('/').get(getMedia);

/**
 * @api {post} /api/media Add Media
 * @apiVersion 1.0.0
 * @apiName PostMedia
 * @apiGroup Media
 * @apiPermission token
 *
 * @apiDescription Lisää uusi media. Tämä reitti on suojattu ja vaatii todennustokenin.
 *
 * @apiHeader {String} Authorization Bearer token käyttäjän todennukseen.
 * @apiHeaderExample {string} Authorization-Example:
 * Authorization: Bearer <token>
 *
 * @apiParam {File} file Ladattava tiedosto (form-data).
 * @apiParam {String} title Median otsikko.
 * @apiParam {String} description Median kuvaus.
 *
 * @apiSuccess {Object} media Lisätty media.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 Created
 * {
 *   "media_id": 2,
 *   "filename": "new_media.jpg",
 *   "title": "New Media",
 *   "description": "Description of the new media",
 *   "user_id": 1,
 *   "media_type": "image/jpeg",
 *   "created_at": "2024-12-03T10:05:00Z"
 * }
 *
 * @apiError Unauthorized Käyttäjä ei ole todennettu.
 * @apiError BadRequest Virheellinen tiedoston muoto.
 */
router.route('/').post(authenticateToken, upload.single('file'), postMedia);

/**
 * @api {get} /api/media/:id Get Media by ID
 * @apiVersion 1.0.0
 * @apiName GetMediaById
 * @apiGroup Media
 * @apiPermission public
 *
 * @apiDescription Hakee yksittäisen median tiedot sen ID:n perusteella.
 *
 * @apiParam {Number} id Median ID.
 *
 * @apiSuccess {Object} media Median tiedot.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "media_id": 1,
 *   "filename": "example.jpg",
 *   "title": "Example Media",
 *   "description": "An example media description.",
 *   "user_id": 1,
 *   "media_type": "image/jpeg",
 *   "created_at": "2024-12-03T10:00:00Z"
 * }
 *
 * @apiError NotFound Mediaa ei löydy annetulla ID:llä.
 */
router.route('/:id').get(getMediaById);

/**
 * @api {put} /api/media/:id Update Media
 * @apiVersion 1.0.0
 * @apiName PutMedia
 * @apiGroup Media
 * @apiPermission token
 *
 * @apiDescription Päivittää median tiedot sen ID:n perusteella. Tämä reitti on suojattu ja vaatii todennustokenin.
 *
 * @apiHeader {String} Authorization Bearer token käyttäjän todennukseen.
 * @apiHeaderExample {string} Authorization-Example:
 * Authorization: Bearer <token>
 *
 * @apiParam {String} [title] Päivitetty otsikko.
 * @apiParam {String} [description] Päivitetty kuvaus.
 *
 * @apiSuccess {Object} media Päivitetty media.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "media_id": 1,
 *   "filename": "example.jpg",
 *   "title": "Updated Media",
 *   "description": "Updated description.",
 *   "user_id": 1,
 *   "media_type": "image/jpeg",
 *   "created_at": "2024-12-03T10:00:00Z"
 * }
 *
 * @apiError Unauthorized Käyttäjä ei ole todennettu.
 * @apiError NotFound Mediaa ei löydy annetulla ID:llä.
 */
router.route('/:id').put(authenticateToken, putMedia);

/**
 * @api {delete} /api/media/:id Delete Media
 * @apiVersion 1.0.0
 * @apiName DeleteMedia
 * @apiGroup Media
 * @apiPermission token
 *
 * @apiDescription Poistaa median sen ID:n perusteella. Tämä reitti on suojattu ja vaatii todennustokenin.
 *
 * @apiHeader {String} Authorization Bearer token käyttäjän todennukseen.
 * @apiHeaderExample {string} Authorization-Example:
 * Authorization: Bearer <token>
 *
 * @apiSuccess {String} message Ilmoitus median poistamisesta.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Media deleted successfully."
 * }
 *
 * @apiError Unauthorized Käyttäjä ei ole todennettu.
 * @apiError NotFound Mediaa ei löydy annetulla ID:llä.
 */
router.route('/:id').delete(authenticateToken, deleteMediaById);

export default router;
