import express from 'express';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('Welcome to my image resizing API...');
});

export default routes;
