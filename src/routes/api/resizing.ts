import express from 'express';
import path from 'path';
import { validateInputs, ErrorCodeAndMessage } from '../../utils/validate';
import { existsSync } from 'fs';
import resizeImage from '../../utils/processing';

const resizingRoute: express.Router = express.Router();

resizingRoute.get('/', async (req: express.Request, res: express.Response) => {
    const validateErrorCodeAndMessage: ErrorCodeAndMessage = validateInputs(
        req.query.image as string,
        req.query.width as string,
        req.query.height as string
    );
    if (validateErrorCodeAndMessage.code === 0) {
        const imageName: string = req.query.image as string;
        const imageWidth = Number(req.query.width as string);
        const imageHeight = Number(req.query.height as string);
        const inputImagePath: string =
            path.resolve('./') + '/assets/images/' + imageName + '.jpg';
        const outputImagePath: string =
            path.resolve('./') +
            '/assets/thumb/' +
            imageName +
            '_' +
            imageWidth +
            '_' +
            imageHeight +
            '.jpg';
        if (existsSync(outputImagePath)) {
            // First check if output image already exist return it.
            res.sendFile(outputImagePath);
        } else {
            // If not exisit resize it.
            const resizeErrorCodeAndMessage: ErrorCodeAndMessage =
                await resizeImage(
                    inputImagePath,
                    outputImagePath,
                    path.resolve('./') + '/assets/thumb/',
                    imageWidth,
                    imageHeight
                );
            if (resizeErrorCodeAndMessage.code === 0) {
                res.sendFile(outputImagePath);
            } else {
                return res
                    .status(resizeErrorCodeAndMessage.code)
                    .send(resizeErrorCodeAndMessage.message);
            }
        }
    } else {
        return res
            .status(validateErrorCodeAndMessage.code)
            .send(validateErrorCodeAndMessage.message);
    }
});

export default resizingRoute;
