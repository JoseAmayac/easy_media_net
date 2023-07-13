import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'
// Configuración de archivo de environment
dotenv.config();


const app = express();

// Configuración de middleware
app.use(express.json());
app.use(cors());


export default app;