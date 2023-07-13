import { Router } from "express";
import * as authController from '../controllers/auth.controller';
import { isAuthenticated } from "../middleware/isauthenticated";

const router = Router();

router.post('/login', authController.loginUser);
router.post('/register',  authController.registerUser);
router.get('/me', [ isAuthenticated ], authController.me);

export default router;