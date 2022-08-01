import express from 'express';
import router from './routes/user.routes';
const app = express();

app.use(express.json());
app.use('/users', router);

export default app;