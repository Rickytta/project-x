import express from 'express';
import user from './routes/routes';

const app = express();
app.use('/auth', user);

export default app;