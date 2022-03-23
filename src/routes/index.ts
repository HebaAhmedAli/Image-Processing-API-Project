import express from 'express';
import resizingRoute from './api/resizing';

const routes = express.Router();

routes.use('/resizing', resizingRoute);

routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('Welcome to my image resizing API...');
});

export default routes;
