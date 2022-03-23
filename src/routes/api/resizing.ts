import express from 'express';
import path from 'path';
import { validateInputs, ErrorCodeAndMessage } from '../../utils/validate';

const resizingRoute: express.Router = express.Router();

resizingRoute.get('/', (req: express.Request, res: express.Response) => {
    const errorCodeAndMessage: ErrorCodeAndMessage = validateInputs(
        req.query.image as string,
        req.query.width as string,
        req.query.height as string
    );
    if (errorCodeAndMessage.code === 0) {
        // TODO: Resize logic.
        const imageName: string = req.query.image as string;
        const imageWidth = Number(req.query.width as string);
        const imageHeight = Number(req.query.height as string);
        const imgLocation: string =
            path.resolve('./') + '/assets/images/' + imageName + '.jpg';
        res.sendFile(imgLocation);
    } else {
        return res
            .status(errorCodeAndMessage.code)
            .send(errorCodeAndMessage.message);
    }
});

export default resizingRoute;
