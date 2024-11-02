import express from 'express';
import serverless from 'serverless-http';
import characterRoutes from './routes/character.routes';

const app = express();

app.use(express.json());
app.use('/characters', characterRoutes);

export const handler = serverless(app);