import { Router } from "express";
import * as postsController from '../controllers/posts.controller';
import { isAuthenticated } from "../../auth/middleware/isauthenticated";

const router = Router();

router.use( isAuthenticated );

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Obtener todos los posts
 *     description: Devuelve todos los posts disponibles en la aplicación
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de posts obtenida correctamente
 *       401:
 *         description: No se proporcionaron credenciales de autenticación o son inválidas
 *       500:
 *         description: Error del servidor
 */
router.get('/', postsController.getAllPosts);
/**
 * @swagger
 * /posts/get-by-user/{userId}:
 *   get:
 *     summary: Obtener posts por usuario
 *     description: Devuelve los posts asociados a un usuario específico
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de posts obtenida correctamente
 *       401:
 *         description: No se proporcionaron credenciales de autenticación o son inválidas
 *       500:
 *         description: Error del servidor
 */
router.get('/get-by-user/:userId', postsController.getPostsByUser);
/**
 * @swagger
 * /posts/my-posts:
 *   get:
 *     summary: Obtener posts del usuario autenticado
 *     description: Devuelve los posts asociados al usuario autenticado
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de posts obtenida correctamente
 *       401:
 *         description: No se proporcionaron credenciales de autenticación o son inválidas
 *       500:
 *         description: Error del servidor
 */
router.get('/my-posts', postsController.getAuthUserPosts);
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Crear un nuevo post
 *     description: Crea un nuevo post en la aplicación
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título del post
 *               message:
 *                 type: string
 *                 description: Mensaje del post
 *             required:
 *               - title
 *               - message
 *     responses:
 *       201:
 *         description: Post creado correctamente
 *       401:
 *         description: No se proporcionaron credenciales de autenticación o son inválidas
 *       500:
 *         description: Error del servidor
 */
router.post('/', postsController.createPost);
/**
 * @swagger
 * /posts/filter:
 *   post:
 *     summary: Filtrar posts
 *     description: Filtra los posts según los parámetros proporcionados
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título del post (opcional)
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de creación del post (opcional)
 *     responses:
 *       200:
 *         description: Lista de posts filtrada correctamente
 *       401:
 *         description: No se proporcionaron credenciales de autenticación o son inválidas
 *       500:
 *         description: Error del servidor
 */
router.post('/filter', postsController.filterPosts);

export default router;