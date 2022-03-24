import sharp from 'sharp';
import { ErrorCodeAndMessage } from './validate';
import fs from 'fs';

const resizeImage = async (
    inputImagePath: string,
    outputImagePath: string,
    outputDir: string,
    width: number,
    height: number
): Promise<ErrorCodeAndMessage> => {
    try {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }
        await sharp(inputImagePath)
            .resize(width, height)
            .toFile(outputImagePath);
        return { code: 0, message: 'Success' };
    } catch (error) {
        console.log(error);
        return { code: 500, message: 'Internal server error' };
    }
};

export default resizeImage;
