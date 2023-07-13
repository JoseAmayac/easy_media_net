import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'

import authRoutes from './modules/auth/routes/auth.routes';
import postsRoutes from './modules/posts/routes/posts.routes';

// Configuración de archivo de environment
dotenv.config();


const app = express();

// Configuración de middleware
app.use(express.json());
app.use(cors());


// Configuración de rutas de aplicación
app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);
export default app;