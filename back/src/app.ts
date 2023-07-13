import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'

import authRoutes from './modules/auth/routes/auth.routes';
import postsRoutes from './modules/posts/routes/posts.routes';

import swagger from './config/swagger';
import { handleError } from './modules/shared/middleware/handle_error';

// Configuración de archivo de environment
dotenv.config();


const app = express();

// Configuración de swagger
swagger( app );

// Configuración de middleware
app.use(express.json());
app.use(cors());

app.use( handleError );

// Configuración de rutas de aplicación
app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);
export default app;