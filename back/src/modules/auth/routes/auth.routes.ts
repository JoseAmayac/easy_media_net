import { Router } from "express";
import * as authController from '../controllers/auth.controller';
import { isAuthenticated } from "../middleware/isauthenticated";

const router = Router();
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     description: Permite a los usuarios iniciar sesión en la aplicación
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error del servidor
 */
router.post('/login', authController.loginUser);
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar nuevo usuario
 *     description: Permite a los usuarios registrarse en la aplicación
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Registro exitoso
 *       422:
 *         description: Error de validación de datos
 *       500:
 *         description: Error del servidor
 */
router.post('/register',  authController.registerUser);
/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Obtener información del usuario actualmente autenticado
 *     description: Devuelve información sobre el usuario que realizó la solicitud y está autenticado
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información del usuario obtenida correctamente
 *       401:
 *         description: No se proporcionó token de autenticación o es inválido
 *       500:
 *         description: Error del servidor
 */
router.get('/me', [ isAuthenticated ], authController.me);

export default router;