import { Router } from "express";
import * as postsController from '../controllers/posts.controller';
import { isAuthenticated } from "../../auth/middleware/isauthenticated";

const router = Router();

router.use( isAuthenticated );

router.get('/', postsController.getAllPosts);
router.get('/get-by-user/:userId', postsController.getPostsByUser);
router.get('/my-posts', postsController.getAuthUserPosts);
router.post('/', postsController.createPost);
router.post('/filter', postsController.filterPosts);

export default router;